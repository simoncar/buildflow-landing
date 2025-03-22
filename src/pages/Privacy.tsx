
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Privacy: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container px-4 mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gradient">Privacy Policy</h1>
          
          <div className="prose prose-invert prose-lg max-w-none opacity-90">
            <p>Last Updated: {new Date().toLocaleDateString()}</p>
            
            <h2>1. Introduction</h2>
            <p>
              Welcome to ONEBUILD. We respect your privacy and are committed to protecting your personal data. 
              This privacy policy will inform you about how we look after your personal data when you visit our website
              and use our mobile application and tell you about your privacy rights and how the law protects you.
            </p>
            
            <h2>2. The Data We Collect About You</h2>
            <p>
              We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
            </p>
            <ul>
              <li>Identity Data: includes first name, last name, username or similar identifier.</li>
              <li>Contact Data: includes email address and telephone numbers.</li>
              <li>Technical Data: includes internet protocol (IP) address, browser type and version, time zone setting and location, 
                  browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access our services.</li>
              <li>Usage Data: includes information about how you use our website and application.</li>
              <li>Project Data: includes information related to your construction projects that you input into the application.</li>
            </ul>
            
            <h2>3. How We Use Your Data</h2>
            <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
            <ul>
              <li>To register you as a new customer</li>
              <li>To provide and manage your account</li>
              <li>To provide the core functionality of the application</li>
              <li>To improve our services</li>
              <li>To communicate with you about features, updates, and changes</li>
            </ul>
            
            <h2>4. Data Security</h2>
            <p>
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or 
              accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, 
              agents, contractors and other third parties who have a business need to know.
            </p>
            
            <h2>5. Data Retention</h2>
            <p>
              We will only retain your personal data for as long as necessary to fulfill the purposes we collected it for, 
              including for the purposes of satisfying any legal, accounting, or reporting requirements.
            </p>
            
            <h2>6. Your Legal Rights</h2>
            <p>
              Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:
            </p>
            <ul>
              <li>Request access to your personal data</li>
              <li>Request correction of your personal data</li>
              <li>Request erasure of your personal data</li>
              <li>Object to processing of your personal data</li>
              <li>Request restriction of processing your personal data</li>
              <li>Request transfer of your personal data</li>
              <li>Right to withdraw consent</li>
            </ul>
            
            <h2>7. Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting 
              the new Privacy Policy on this page and updating the "Last Updated" date.
            </p>
            
            <h2>8. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at: privacy@onebuild.com
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Privacy;
