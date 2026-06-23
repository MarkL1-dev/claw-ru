import React from "react";
import { PolicyLayout } from "./policy-layout";
import { Icon } from "@iconify/react";

export const TermsOfService = () => {
  return (
    <PolicyLayout 
      title="Terms of Service" 
      lastUpdated="January 15, 2024"
      policyPath="terms-of-service"
    >
      <div className="bg-primary/5 p-6 rounded-lg mb-8 border-l-4 border-primary">
        <p className="text-lg font-medium mb-0">
          These Terms of Service constitute a legally binding agreement between you and CLAW Law Firm. By accessing our site, you agree to be bound by these terms.
        </p>
      </div>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-foreground border-b border-divider pb-2">Agreement to Terms</h2>
        <p className="mb-4 leading-relaxed">
          These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and CLAW Law Firm ("we," "us" or "our"), concerning your access to and use of the website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the "Site").
        </p>
        
        <div className="flex items-center gap-4 p-4 bg-warning/10 rounded-lg my-6 border-l-4 border-warning">
          <Icon icon="lucide:alert-triangle" className="text-warning text-xl" />
          <p className="m-0 leading-relaxed">
            You agree that by accessing the Site, you have read, understood, and agree to be bound by all of these Terms of Service. If you do not agree with all of these Terms of Service, then you are expressly prohibited from using the Site and you must discontinue use immediately.
          </p>
        </div>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-foreground border-b border-divider pb-2">Intellectual Property Rights</h2>
        <div className="relative pl-6 border-l-2 border-primary/30 my-6">
          <p className="leading-relaxed">
            Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights and unfair competition laws of the United States, international copyright laws, and international conventions.
          </p>
        </div>
        <p className="leading-relaxed">
          The Content and the Marks are provided on the Site "AS IS" for your information and personal use only. Except as expressly provided in these Terms of Service, no part of the Site and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-foreground border-b border-divider pb-2">User Representations</h2>
        <p className="mb-4 leading-relaxed">
          By using the Site, you represent and warrant that:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <div className="bg-content2 p-5 rounded-lg">
            <div className="flex items-start gap-3">
              <div className="bg-primary/10 p-1 rounded-full mt-1 flex-shrink-0">
                <Icon icon="lucide:check" className="text-primary" />
              </div>
              <p className="m-0 leading-relaxed">All registration information you submit will be true, accurate, current, and complete</p>
            </div>
          </div>
          
          <div className="bg-content2 p-5 rounded-lg">
            <div className="flex items-start gap-3">
              <div className="bg-primary/10 p-1 rounded-full mt-1 flex-shrink-0">
                <Icon icon="lucide:check" className="text-primary" />
              </div>
              <p className="m-0 leading-relaxed">You will maintain the accuracy of such information and promptly update as necessary</p>
            </div>
          </div>
          
          <div className="bg-content2 p-5 rounded-lg">
            <div className="flex items-start gap-3">
              <div className="bg-primary/10 p-1 rounded-full mt-1 flex-shrink-0">
                <Icon icon="lucide:check" className="text-primary" />
              </div>
              <p className="m-0 leading-relaxed">You have the legal capacity and agree to comply with these Terms of Service</p>
            </div>
          </div>
          
          <div className="bg-content2 p-5 rounded-lg">
            <div className="flex items-start gap-3">
              <div className="bg-primary/10 p-1 rounded-full mt-1 flex-shrink-0">
                <Icon icon="lucide:check" className="text-primary" />
              </div>
              <p className="m-0 leading-relaxed">You are not a minor in the jurisdiction in which you reside</p>
            </div>
          </div>
          
          <div className="bg-content2 p-5 rounded-lg">
            <div className="flex items-start gap-3">
              <div className="bg-primary/10 p-1 rounded-full mt-1 flex-shrink-0">
                <Icon icon="lucide:check" className="text-primary" />
              </div>
              <p className="m-0 leading-relaxed">You will not access the Site through automated or non-human means</p>
            </div>
          </div>
          
          <div className="bg-content2 p-5 rounded-lg">
            <div className="flex items-start gap-3">
              <div className="bg-primary/10 p-1 rounded-full mt-1 flex-shrink-0">
                <Icon icon="lucide:check" className="text-primary" />
              </div>
              <p className="m-0 leading-relaxed">You will not use the Site for any illegal or unauthorized purpose</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-foreground border-b border-divider pb-2">Prohibited Activities</h2>
        <p className="mb-4 leading-relaxed">
          You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
        </p>
        <p className="mb-4 leading-relaxed">
          As a user of the Site, you agree not to:
        </p>
        <ol className="list-decimal pl-6 space-y-3 mb-4">
          <li className="leading-relaxed">Systematically retrieve data or other content from the Site to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.</li>
          <li className="leading-relaxed">Make any unauthorized use of the Site, including collecting usernames and/or email addresses of users by electronic or other means for the purpose of sending unsolicited email, or creating user accounts by automated means or under false pretenses.</li>
          <li className="leading-relaxed">Use the Site to advertise or offer to sell goods and services.</li>
          <li className="leading-relaxed">Circumvent, disable, or otherwise interfere with security-related features of the Site, including features that prevent or restrict the use or copying of any Content or enforce limitations on the use of the Site and/or the Content contained therein.</li>
          <li className="leading-relaxed">Engage in unauthorized framing of or linking to the Site.</li>
          <li className="leading-relaxed">Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords.</li>
        </ol>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-foreground border-b border-divider pb-2">Contact Us</h2>
        <p className="mb-4 leading-relaxed">
          In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:
        </p>
        
        <div className="bg-content2 p-6 rounded-lg border border-divider">
          <p className="font-semibold mb-2">CLAW Law Firm</p>
          <p className="mb-0">
            Elgin Avenue, George Town<br />
            Grand Cayman KY1-9000<br />
            Cayman Islands<br />
            Phone: +1 (345) 555-0123<br />
            Email: <a href="mailto:legal@clawfirm.com" className="text-primary hover:underline">legal@clawfirm.com</a>
          </p>
        </div>
      </section>
    </PolicyLayout>
  );
};