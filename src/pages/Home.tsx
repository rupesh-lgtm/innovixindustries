import React from 'react';
import { StatsBanner } from '../components/StatsBanner';
import { About } from '../components/About';
import { Products } from '../components/Products';
import { FloatingActions } from '../components/FloatingActions';
import { PartnerWithUs } from '../components/PartnerWithUs';
import VideoSlider from '../components/VideoSlider';
import Weoffer from '../components/Weoffer';
import WhyChoose from '../components/WhyChoose';
import Instruction from '../components/Instruction';
interface HomePageProps {
  onNavigate?: (section: string) => void;
}

export const Home: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <>
      {/* Full-width Video Hero Slider running behind the transparent navbar */}
      <VideoSlider
        src="/videoslider.mp4"
        poster="/recycle-slider.png"
        title="Industrial Recycling & Scrap Processing"
        className="w-full"
      />

      {/* Hero Section */}
      {/* <HeroBanner /> */}

      {/* Stats Strip */}
      <StatsBanner />

      {/* About Section */}
      <About onNavigate={onNavigate} />

      {/* Weoffer */}
      <Weoffer />

      {/* Products Section */}
      <Products />
      {/* Industries we serve */}
      <Instruction />
      {/* Why Choose */}
      <WhyChoose />
      {/* Floating Services Carousel */}
      <FloatingActions />


      {/* Partner With Us Section */}
      <PartnerWithUs />
    </>
  );
};

export default Home;
