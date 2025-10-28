import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Add from "./components/Add";
import ProviderSection from "./components/ProviderSection";
import AboutUs from "./components/AboutUs";
import FAQ from "./components/FAQ";
import FastTag from "./components/FastTag";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Add/>
      <ProviderSection/>
      <AboutUs/>
      <FAQ/>
      <FastTag/>
      <Footer/>
    </>
  );
}
