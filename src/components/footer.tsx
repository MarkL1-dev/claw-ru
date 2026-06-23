import React from "react";
import { Link, Divider } from "@heroui/react";
import { Icon } from "@iconify/react";
import { Link as RouterLink } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-content3 text-foreground-700 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Icon icon="lucide:scale" className="text-primary text-2xl" />
              <p className="font-semibold tracking-tight">CAYMAN RECOVERY</p>
            </div>
            <p className="text-sm mb-4">
              Specialized legal services in asset recovery, fraud litigation, and cross-border enforcement.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" color="foreground">Asset Recovery</Link></li>
              <li><Link href="#" color="foreground">Fraud Litigation</Link></li>
              <li><Link href="#" color="foreground">Insolvency & Restructuring</Link></li>
              <li><Link href="#" color="foreground">Cross-Border Enforcement</Link></li>
              <li><Link href="#" color="foreground">Corporate Disputes</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link as={RouterLink} to="/" color="foreground">Home</Link></li>
              <li><Link href="#services" color="foreground">Our Services</Link></li>
              <li><Link href="#team" color="foreground">Our Team</Link></li>
              <li><Link href="#testimonials" color="foreground">Testimonials</Link></li>
              <li><Link href="#contact" color="foreground">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link as={RouterLink} to="/policies/privacy-policy" color="foreground">Privacy Policy</Link></li>
              <li><Link as={RouterLink} to="/policies/terms-of-service" color="foreground">Terms of Service</Link></li>
              <li><Link as={RouterLink} to="/policies/cookie-policy" color="foreground">Cookie Policy</Link></li>
              <li><Link as={RouterLink} to="/policies/disclaimer" color="foreground">Disclaimer</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-divider mt-10 pt-6 text-sm text-foreground-600">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p>© {new Date().getFullYear()} Cayman Recovery Law Firm. All rights reserved.</p>
            <p>Regulated by the Cayman Islands Legal Practitioners Association</p>
          </div>
        </div>
      </div>
    </footer>
  );
};