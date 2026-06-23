import React from "react";
import { PolicyLayout } from "./policy-layout";
import { Icon } from "@iconify/react";

export const Disclaimer = () => {
  return (
    <PolicyLayout 
      title="Legal Disclaimer" 
      lastUpdated="January 15, 2024"
      policyPath="disclaimer"
    >
      <div className="bg-warning/10 p-6 rounded-lg mb-8 border-l-4 border-warning">
        <div className="flex items-start gap-4">
          <Icon icon="lucide:alert-triangle" className="text-warning text-xl mt-1 flex-shrink-0" />
          <p className="text-lg font-medium mb-0">
            The information provided on this website is for general informational purposes only and does not constitute legal advice or create an attorney-client relationship.
          </p>
        </div>
      </div>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-foreground border-b border-divider pb-2">Website Disclaimer</h2>
        <p className="mb-4 leading-relaxed">
          The information provided by CLAW Law Firm ("we," "us," or "our") on our website (the "Site") is for general informational purposes only. All information on the Site is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site.
        </p>
        
        <div className="bg-danger/10 p-6 rounded-lg my-6 border-l-4 border-danger">
          <p className="font-bold text-center mb-0">
            UNDER NO CIRCUMSTANCE SHALL WE HAVE ANY LIABILITY TO YOU FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF THE SITE OR RELIANCE ON ANY INFORMATION PROVIDED ON THE SITE. YOUR USE OF THE SITE AND YOUR RELIANCE ON ANY INFORMATION ON THE SITE IS SOLELY AT YOUR OWN RISK.
          </p>
        </div>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-foreground border-b border-divider pb-2">Professional Disclaimer</h2>
        <div className="flex items-start gap-6 my-6">
          <div className="hidden md:flex items-center justify-center bg-primary/10 p-4 rounded-full flex-shrink-0">
            <Icon icon="lucide:scale" className="text-primary text-4xl" />
          </div>
          <div>
            <p className="mb-4 leading-relaxed">
              The Site cannot and does not contain legal advice. The legal information is provided for general informational and educational purposes only and is not a substitute for professional advice. Accordingly, before taking any actions based upon such information, we encourage you to consult with the appropriate professionals. We do not provide any kind of legal advice.
            </p>
            <div className="bg-content2 p-4 rounded-lg border-l-4 border-primary my-4">
              <p className="font-medium mb-0">
                THE USE OR RELIANCE OF ANY INFORMATION CONTAINED ON THE SITE IS SOLELY AT YOUR OWN RISK.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-foreground border-b border-divider pb-2">No Attorney-Client Relationship</h2>
        <div className="space-y-6">
          <div className="bg-content2 p-6 rounded-lg shadow-xs">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-2 rounded-full mt-1 flex-shrink-0">
                <Icon icon="lucide:users" className="text-primary" />
              </div>
              <p className="mb-0 leading-relaxed">
                The content on the Site is not intended to and does not constitute legal advice or create an attorney-client relationship. The information, content, and materials available on the Site are for general informational purposes only and are not intended to be relied upon for any purpose.
              </p>
            </div>
          </div>
          
          <div className="bg-content2 p-6 rounded-lg shadow-xs">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-2 rounded-full mt-1 flex-shrink-0">
                <Icon icon="lucide:mail" className="text-primary" />
              </div>
              <p className="mb-0 leading-relaxed">
                <strong>Important:</strong> Contacting us through the Site or sending us an email does not create an attorney-client relationship. Until we have agreed to represent you, anything you send us will not be confidential or privileged.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-foreground border-b border-divider pb-2">External Links Disclaimer</h2>
        <div className="bg-content2 p-6 rounded-lg mb-4">
          <p className="mb-4 leading-relaxed">
            The Site may contain (or you may be sent through the Site) links to other websites or content belonging to or originating from third parties or links to websites and features in banners or other advertising. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us.
          </p>
          <p className="mb-0 leading-relaxed font-medium">
            WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR THE ACCURACY OR RELIABILITY OF ANY INFORMATION OFFERED BY THIRD-PARTY WEBSITES LINKED THROUGH THE SITE OR ANY WEBSITE OR FEATURE LINKED IN ANY BANNER OR OTHER ADVERTISING.
          </p>
        </div>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-foreground border-b border-divider pb-2">Contact Us</h2>
        <p className="mb-4 leading-relaxed">
          If you have any questions about this Disclaimer, please contact us at:
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