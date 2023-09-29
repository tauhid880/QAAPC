import { BrowserRouter } from "react-router-dom";
import { IoIosArrowDropupCircle } from "react-icons/io";
import Navbar from "./Shared/Navbar";
import Footer from "./Shared/Footer";
import About from "./Pages/About/About";
import ContestRule from "./Pages/ContestRule/ContestRule";
import RegForm from "./Pages/RegForm/RegForm";
import Awards from "./Pages/Awards/Awards";
import Gallery from "./Pages/Gallery/Gallery";
import ContactUs from "./Pages/Contact Us/ContactUs";
import { HashLink } from "react-router-hash-link";
import { Helmet } from "react-helmet";
import Carousel from "./components/Carousel";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Topbar from "./Shared/Topbar";
export const siteName = "QAAPC (2023)";

function App() {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);
  return (
    <div>
      <Helmet>
        <title>QAAPC - 2023</title>
      </Helmet>
      <BrowserRouter>
        <Navbar></Navbar>
        <Carousel></Carousel>
        <Topbar></Topbar>
        <About></About>
        <ContestRule></ContestRule>
        <Awards></Awards>
        <RegForm></RegForm>
        <Gallery></Gallery>
        <ContactUs></ContactUs>
        <HashLink
          className="flex justify-end items-center lg:mt-10 mb-5 right-6 lg:right-14 relative"
          smooth
          to="#top"
        >
          <IoIosArrowDropupCircle size={50}></IoIosArrowDropupCircle>
        </HashLink>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
