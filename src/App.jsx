import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Qualifications from "./components/Qualifications.jsx";
import Memberships from "./components/Memberships.jsx";
import Specializations from "./components/Specializations.jsx";
import QA from "./components/QA.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import WhatsAppFloat from "./components/WhatsAppFloat.jsx";
import { LanguageProvider } from "./i18n/LanguageContext.jsx";

export default function App() {
  return (
    <LanguageProvider>
    <>
      <Header />
      <main>
        <div id="home" className="scroll-mt-[108px]">
          <Hero />
        </div>
        <About />
        <Qualifications />
        <Memberships />
        <Specializations />
        <QA />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
    </LanguageProvider>
  );
}
