import React from 'react';
import HeroSection from '../Components/Landing/HeroSection'
import Testimonials from '../Components/Landing/Testimonials'
import Features from '../Components/Landing/Features'
import CTA from '../Components/Landing/CTA';
import Pricing from '../Components/Landing/Pricing';
import Footer from '../Components/Landing/Footer';
import {featuresData, pricingplans} from '../assets/data';

const Landing = () => {
  return (
    <div className="landing-page  from-gray-50 to-gray-100">
    {/* Landing    Hero Section */}
    <HeroSection />

    {/* Features */}
    <Features features={featuresData} />

    {/* Pricing */}
    <Pricing pricingplan={pricingplans}/>

    {/* Testimonials */}
    <Testimonials />

    {/* CTA  */}
    <CTA />

    {/* Footer */}
    <Footer />

     
    </div>
  )
}

export default Landing