import React from "react";
import { PolicyLayout } from "./policy-layout";
import { Icon } from "@iconify/react";

export const CookiePolicy = () => {
  return (
    <PolicyLayout 
      title="Cookie Policy" 
      lastUpdated="January 15, 2024"
      policyPath="cookie-policy"
    >
      <div className="bg-primary/5 p-6 rounded-lg mb-8 border-l-4 border-primary">
        <p className="text-lg font-medium mb-0">
          This Cookie Policy explains how CLAW Law Firm uses cookies and similar technologies to recognize you when you visit our website.
        </p>
      </div>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-foreground border-b border-divider pb-2">Introduction</h2>
        <p className="mb-4 leading-relaxed">
          This policy explains what cookies are, why we use them, and your rights to control our use of them. We use cookies to enhance your browsing experience, analyze site traffic, and personalize content.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-foreground border-b border-divider pb-2">What Are Cookies?</h2>
        <div className="flex items-start gap-6 my-6">
          <div className="hidden md:flex items-center justify-center bg-primary/10 p-4 rounded-full flex-shrink-0">
            <Icon icon="lucide:cookie" className="text-primary text-4xl" />
          </div>
          <div>
            <p className="mb-4 leading-relaxed">
              Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.
            </p>
            <p className="leading-relaxed">
              Cookies set by the website owner (in this case, CLAW Law Firm) are called "first-party cookies". Cookies set by parties other than the website owner are called "third-party cookies". Third-party cookies enable third-party features or functionality to be provided on or through the website (e.g., advertising, interactive content, and analytics). The parties that set these third-party cookies can recognize your computer both when it visits the website in question and also when it visits certain other websites.
            </p>
          </div>
        </div>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-foreground border-b border-divider pb-2">Types of Cookies We Use</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
          <div className="bg-content2 p-6 rounded-lg shadow-xs">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary/10 p-2 rounded-full flex-shrink-0">
                <Icon icon="lucide:shield" className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold m-0">Essential Website Cookies</h3>
            </div>
            <p className="m-0 leading-relaxed">
              Strictly necessary to provide you with services available through our Website and to use some of its features, such as access to secure areas.
            </p>
          </div>
          
          <div className="bg-content2 p-6 rounded-lg shadow-xs">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary/10 p-2 rounded-full flex-shrink-0">
                <Icon icon="lucide:settings" className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold m-0">Performance Cookies</h3>
            </div>
            <p className="m-0 leading-relaxed">
              Used to enhance the performance and functionality of our Website but are non-essential to their use.
            </p>
          </div>
          
          <div className="bg-content2 p-6 rounded-lg shadow-xs">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary/10 p-2 rounded-full flex-shrink-0">
                <Icon icon="lucide:bar-chart" className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold m-0">Analytics Cookies</h3>
            </div>
            <p className="m-0 leading-relaxed">
              Collect information to help us understand how our Website is being used or how effective our marketing campaigns are.
            </p>
          </div>
        </div>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-foreground border-b border-divider pb-2">How Can You Control Cookies?</h2>
        <div className="space-y-6">
          <div className="bg-content2 p-6 rounded-lg shadow-xs">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-2 rounded-full mt-1 flex-shrink-0">
                <Icon icon="lucide:sliders" className="text-primary" />
              </div>
              <div>
                <p className="font-medium mb-2">Browser Settings</p>
                <p className="mb-0 leading-relaxed">
                  You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our Website though your access to some functionality may be restricted.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-content2 p-6 rounded-lg shadow-xs">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-2 rounded-full mt-1 flex-shrink-0">
                <Icon icon="lucide:x-circle" className="text-primary" />
              </div>
              <div>
                <p className="font-medium mb-2">Opt-Out Links</p>
                <p className="mb-0 leading-relaxed">
                  Most advertising networks offer you a way to opt out of targeted advertising. If you would like to find out more information, please visit <a href="http://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">http://www.aboutads.info/choices/</a> or <a href="http://www.youronlinechoices.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">http://www.youronlinechoices.com</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-foreground border-b border-divider pb-2">Contact Us</h2>
        <p className="mb-4 leading-relaxed">
          If you have any questions about our use of cookies or other technologies, please contact us at:
        </p>
        
        <div className="bg-content2 p-6 rounded-lg border border-divider">
          <p className="font-semibold mb-2">CLAW Law Firm</p>
          <p className="mb-0">
            Elgin Avenue, George Town<br />
            Grand Cayman KY1-9000<br />
            Cayman Islands<br />
            Phone: +1 (360) 804 8850<br />
            Email: <a href="mailto:privacy@clawfirm.com" className="text-primary hover:underline">privacy@clawfirm.com</a>
          </p>
        </div>
      </section>
    </PolicyLayout>
  );
};