import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Hero } from "./components/hero";
import { OurStory } from "./components/our-story";
import { Services } from "./components/services";
import { Testimonials } from "./components/testimonials";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";
// Import policy pages
import { PrivacyPolicy } from "./pages/policies/privacy-policy";
import { TermsOfService } from "./pages/policies/terms-of-service";
import { CookiePolicy } from "./pages/policies/cookie-policy";
import { Disclaimer } from "./pages/policies/disclaimer";
import { ServicePage } from "./pages/service-page";
import { ScrollToTop } from "./components/scroll-to-top";
import { NotFound } from "./pages/not-found";
import { FaviconGenerator } from "./components/favicon-generator";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <FaviconGenerator />
      <ScrollToTop />
      <Navbar />
      <Routes>
        {/* Main website layout */}
        <Route path="/" element={
          <main>
            <Hero />
            <OurStory />
            <Services />
            <Testimonials />
            <Contact />
          </main>
        } />
        
        {/* Service pages */}
        <Route path="/services/:serviceId" element={<ServicePage />} />
        
        {/* Remove all resource-related routes */}
        {/* <Route path="/resources/:resourceType" element={<ResourcePage />} />
        <Route path="/newsletter/:newsletterId" element={<NewsletterDetailPage />} />
        <Route path="/publication/:publicationId" element={<PublicationDetailPage />} />
        <Route path="/case-studies" element={<CaseStudiesPage />} /> */}
        
        {/* Contact page - add dedicated route */}
        <Route path="/contact" element={<Contact standalone={true} />} />
        
        {/* Remove careers page */}
        {/* <Route path="/careers" element={<CareersPage />} /> */}
        
        {/* Policy pages */}
        <Route path="/policies/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/policies/terms-of-service" element={<TermsOfService />} />
        <Route path="/policies/cookie-policy" element={<CookiePolicy />} />
        <Route path="/policies/disclaimer" element={<Disclaimer />} />
        
        {/* Catch-all route for 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}