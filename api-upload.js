#!/usr/bin/env node

import https from 'https';
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const TOKEN = process.env.GITHUB_TOKEN || ''; // Set GITHUB_TOKEN environment variable
const OWNER = 'adityamishra5166-ctrl';
const REPO = 'Aditya-mishra';
const BRANCH = 'main';

function makeRequest(method, path, data) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.github.com',
      path: path,
      method: method,
      headers: {
        'Authorization': `token ${TOKEN}`,
        'User-Agent': 'Node.js',
        'Accept': 'application/vnd.github.v3+json',
        'Content-Type': 'application/json'
      }
    };

    const req = https.request(options, (res) => {
      let body = '';
      res.on('data', (chunk) => body += chunk);
      res.on('end', () => {
        try {
          resolve({ status: res.statusCode, data: JSON.parse(body), headers: res.headers });
        } catch (e) {
          resolve({ status: res.statusCode, data: body, headers: res.headers });
        }
      });
    });

    req.on('error', reject);
    if (data) req.write(JSON.stringify(data));
    req.end();
  });
}

async function getFileContent(filePath) {
  try {
    return fs.readFileSync(filePath, 'utf8');
  } catch (e) {
    return null;
  }
}

async function getFileSha(filePath) {
  const apiPath = `/repos/${OWNER}/${REPO}/contents/${filePath}?ref=${BRANCH}`;
  const result = await makeRequest('GET', apiPath);
  if (result.status === 200 && result.data.sha) {
    return result.data.sha;
  }
  return null;
}

async function uploadFile(filePath, content) {
  const base64Content = Buffer.from(content).toString('base64');
  const sha = await getFileSha(filePath);
  
  const data = {
    message: `Update ${filePath}`,
    content: base64Content,
    branch: BRANCH
  };
  
  if (sha) {
    data.sha = sha;
  }

  const apiPath = `/repos/${OWNER}/${REPO}/contents/${filePath}`;
  const result = await makeRequest('PUT', apiPath, data);
  
  if (result.status === 200 || result.status === 201) {
    console.log(`✅ Uploaded: ${filePath}`);
    return true;
  } else {
    console.log(`❌ Failed: ${filePath} - ${result.status} - ${JSON.stringify(result.data)}`);
    return false;
  }
}

async function main() {
  console.log('🚀 Starting GitHub API upload...\n');
  
  // Get list of files to upload
  const filesToUpload = [
    'package.json',
    'README.md',
    'tsconfig.json',
    'vite.config.ts',
    'drizzle.config.ts',
    'components.json',
    'postcss.config.js',
    'client/index.html',
    'client/src/main.tsx',
    'client/src/App.tsx',
    'client/src/index.css',
    'server/index.ts',
    'server/routes.ts',
    'server/static.ts',
    'server/storage.ts',
    'server/vite.ts',
    'shared/schema.ts',
  ];

  // Add all component files
  const componentFiles = execSync('find client/src/components -type f -name "*.tsx" -o -name "*.ts" | head -50', { encoding: 'utf8' }).trim().split('\n').filter(f => f);
  filesToUpload.push(...componentFiles);

  // Add page files
  const pageFiles = execSync('find client/src/pages -type f -name "*.tsx" | head -20', { encoding: 'utf8' }).trim().split('\n').filter(f => f);
  filesToUpload.push(...pageFiles);

  // Add other important files
  const otherFiles = execSync('find client/src -type f \\( -name "*.ts" -o -name "*.tsx" \\) | grep -E "(lib|hooks)" | head -20', { encoding: 'utf8' }).trim().split('\n').filter(f => f);
  filesToUpload.push(...otherFiles);

  console.log(`📦 Found ${filesToUpload.length} files to upload\n`);

  let success = 0;
  let failed = 0;

  for (const file of filesToUpload) {
    if (!file || !fs.existsSync(file)) continue;
    
    const content = await getFileContent(file);
    if (!content) continue;

    // Convert to GitHub path format
    const githubPath = file.replace(/^\.\//, '');
    
    const result = await uploadFile(githubPath, content);
    if (result) {
      success++;
    } else {
      failed++;
    }
    
    // Small delay to avoid rate limiting
    await new Promise(resolve => setTimeout(resolve, 100));
  }

  console.log(`\n✅ Upload complete!`);
  console.log(`   Success: ${success}`);
  console.log(`   Failed: ${failed}`);
  console.log(`\n🌐 View at: https://github.com/${OWNER}/${REPO}`);
}

main().catch(console.error);

