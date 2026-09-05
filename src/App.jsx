import AboutSection from "./Components/About/About";
import Footer from "./Components/Footer/Footer";
import HelpSection from "./Components/Help/Help";
import Hero from "./Components/Hero/Hero_Comp";
import ResponsiveNavbar from "./Components/Nav/Nav";
import PopularResidences from "./Components/OurPopular/Popular";
import Testimonials from "./Components/Testimonials/Testimonials";
import WhyChooseUs from "./Components/WhyChooseUs/Choose";

const App = () => {
  return (
    <>
      <ResponsiveNavbar />
      <Hero />
      <AboutSection/>
      <WhyChooseUs/>
      <PopularResidences/>
      <Testimonials/>
      <HelpSection/>
      <Footer/>
    </>
  );
};

export default App;
