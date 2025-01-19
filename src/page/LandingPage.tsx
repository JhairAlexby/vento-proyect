import Navbar from "../components/sections/Navbar";
import Hero from "../components/sections/Hero";
import Features from "../components/sections/Features";
import GetStarted from "../components/sections/GetStarted";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <GetStarted />
    </div>
  );
};

export default LandingPage;