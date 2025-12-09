import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { AnimatePresence, motion } from "framer-motion";
import Layout from "@/components/Layout";

// Pages
import Home from "@/pages/home";
import About from "@/pages/about";
import Projects from "@/pages/projects";
import Experience from "@/pages/experience";
import Contact from "@/pages/contact";
import NotFound from "@/pages/not-found";

function AnimatedRoutes() {
  const [location] = useLocation();

  return (
    <Layout>
      <AnimatePresence mode="wait">
        <Switch key={location}>
          <Route path="/">
            <PageWrapper>
              <Home />
            </PageWrapper>
          </Route>
          <Route path="/about">
            <PageWrapper>
              <About />
            </PageWrapper>
          </Route>
          <Route path="/projects">
            <PageWrapper>
              <Projects />
            </PageWrapper>
          </Route>
          <Route path="/experience">
            <PageWrapper>
              <Experience />
            </PageWrapper>
          </Route>
          <Route path="/contact">
            <PageWrapper>
              <Contact />
            </PageWrapper>
          </Route>
          <Route>
            <PageWrapper>
              <NotFound />
            </PageWrapper>
          </Route>
        </Switch>
      </AnimatePresence>
    </Layout>
  );
}

// Wrapper for page transitions (glitch/fade effect)
function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(10px)", scale: 0.98 }}
      animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
      exit={{ opacity: 0, filter: "blur(10px)", scale: 1.02 }}
      transition={{ duration: 0.4, ease: "circOut" }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AnimatedRoutes />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
