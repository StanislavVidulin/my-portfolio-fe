import Hero from "./pages/Hero";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Layout from "./layouts/Layout";
import Technologies from "./pages/Technologies";

export default function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Technologies />
      <Projects />
      <Contact />
    </Layout>
  );
}
