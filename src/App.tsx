import Layout from "./layouts/Layout";
import HeroPage from "./pages/HeroPage";
import AboutPage from "./pages/AboutPage";
import TechnologiesPage from "./pages/TechnologiesPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";

export default function App() {
  return (
    <Layout>
      <HeroPage />
      <AboutPage />
      <TechnologiesPage />
      <ProjectsPage />
      <ContactPage />
    </Layout>
  );
}
