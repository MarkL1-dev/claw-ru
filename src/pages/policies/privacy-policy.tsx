import React from "react";
import { Breadcrumbs, BreadcrumbItem, Link } from "@heroui/react";
import { Link as RouterLink } from "react-router-dom";

export const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <Breadcrumbs className="mb-8">
        <BreadcrumbItem>
          <Link as={RouterLink} to="/">Home</Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <span>Privacy Policy</span>
        </BreadcrumbItem>
      </Breadcrumbs>
      
      <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
      
      <div className="prose max-w-3xl mx-auto">
        <div className="bg-primary/5 p-6 rounded-lg mb-8 border-l-4 border-primary">
          <p className="text-lg font-medium mb-0">
            This Privacy Policy explains how CLAW Law Firm collects, uses, and protects your personal information.
          </p>
        </div>
        
        <p className="text-sm text-foreground-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground border-b border-divider pb-2">1. Introduction</h2>
            <p className="mb-4 leading-relaxed">
              CLAW Law Firm ("we", "our", or "us") is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
              when you visit our website or use our services.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground border-b border-divider pb-2">2. Information We Collect</h2>
            <p className="mb-4 leading-relaxed">
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li className="leading-relaxed">Contact us through our website</li>
              <li className="leading-relaxed">Subscribe to our newsletter</li>
              <li className="leading-relaxed">Request a consultation</li>
              <li className="leading-relaxed">Apply for employment</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground border-b border-divider pb-2">3. How We Use Your Information</h2>
            <p className="mb-4 leading-relaxed">
              The information we collect may be used to:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li className="leading-relaxed">Provide, operate, and maintain our services</li>
              <li className="leading-relaxed">Respond to your inquiries and fulfill your requests</li>
              <li className="leading-relaxed">Send you administrative information</li>
              <li className="leading-relaxed">Send you marketing and promotional communications</li>
              <li className="leading-relaxed">Improve our website and services</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground border-b border-divider pb-2">4. Disclosure of Your Information</h2>
            <p className="mb-4 leading-relaxed">
              We may share your information with:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li className="leading-relaxed">Our service providers who perform services on our behalf</li>
              <li className="leading-relaxed">Professional advisors, such as lawyers, auditors, and insurers</li>
              <li className="leading-relaxed">Government bodies when required by law</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground border-b border-divider pb-2">5. Security of Your Information</h2>
            <div className="bg-content2 p-5 rounded-lg">
              <p className="mb-0 leading-relaxed">
                We implement appropriate security measures to protect your personal information. 
                However, no method of transmission over the Internet or electronic storage is 100% secure.
              </p>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground border-b border-divider pb-2">6. Your Rights</h2>
            <p className="mb-4 leading-relaxed">
              Depending on your location, you may have certain rights regarding your personal information, 
              including the right to access, correct, or delete your personal information.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground border-b border-divider pb-2">7. Changes to This Privacy Policy</h2>
            <p className="mb-4 leading-relaxed">
              We may update our Privacy Policy from time to time. We will notify you of any changes by 
              posting the new Privacy Policy on this page.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground border-b border-divider pb-2">8. Contact Us</h2>
            <p className="mb-4 leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <div className="bg-content2 p-6 rounded-lg border border-divider">
              <p className="font-semibold mb-2">CLAW Law Firm</p>
              <p className="mb-0">
                Email: privacy@clawsolution.info<br />
                Phone: +1 (301) 558-8288<br />
                Address: Elgin Avenue, George Town, Grand Cayman KY1-9000, Cayman Islands
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};