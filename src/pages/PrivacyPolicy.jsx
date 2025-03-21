import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-5 py-10 shadow-lg my-10">
      <h1 className="text-3xl font-bold text-center mb-6">Privacy Policy</h1>

      <div className="space-y-6 text-gray-700">
        {/* Introduction */}
        <section>
          <h2 className="text-xl font-semibold">1. Introduction</h2>
          <p>
          Welcome to <strong>VOTUHOT</strong>. This Privacy Policy outlines how we collect, use, disclose, and safeguard your personal information when you access our website
        and utilise our cyber security services. Protecting your privacy and personal data 
        is of utmost importance to us, and we are committed to ensuring the
        security and confidentiality of the information you provide.
          </p>
        </section>

        {/* Information We Collect */}
        <section>
          <h2 className="text-xl font-semibold">2. Information We Collect</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Personal Information:</strong>  When you interact with our website or engage with our VOTUHOT services, we may collect personal information such as your name,
              email address, contact details, and any other information you provide voluntarily.
            </li>
            <li>
              <strong>Usage Data:</strong>  We may automatically collect certain information about your visit to our website, including your IP address, device information, browser
              type, and pages visited. This data is collected to improve our website’s functionality and to better understand how visitors interact with our content.
            </li>
            <li>
              <strong>Cookies & Similar Technologies:</strong>  We use cookies and similar tracking technologies to enhance your browsing experience on our website. Cookies
                allow us to remember your preferences and recognise you when you return to our site. You can manage your cookie preferences through your browser
                settings.
            </li>
          </ul>
        </section>

        {/* How We Use Your Information */}
        <section>
          <h2 className="text-xl font-semibold">3. How We Use Your Information</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Providing Services:</strong>  We use your personal information to deliver our cyber security services, including vulnerability assessments, penetration testing,
              incident response, and more.
            </li>
            <li>
              <strong>Improving User Experience:</strong>  Your data helps us tailor our website content, services, and offerings to meet your needs and preferences, providing you
              with a seamless and personalised experience.
            </li>
            <li>
              <strong>Communication:</strong>  We may use your contact information to respond to your inquiries, provide updates about our services, and send relevant marketing
              communications if you opt-in to receive them.
            </li>
          </ul>
        </section>

        {/* Information Sharing and Disclosure */}
        <section>
          <h2 className="text-xl font-semibold">4. Information Sharing & Disclosure</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Third-Party Service Providers:</strong> We may share your personal information with trusted third-party service providers who assist us in delivering our
                services, such as hosting, data analysis, and customer support. These providers are contractually obligated to protect your data and can only use it for
                the specified purposes
            </li>
            <li>
              <strong>Legal Compliance:</strong> We may disclose your personal information when required by law, in response to a court order, legal process, or to comply with
              applicable regulations.
            </li>
          </ul>
        </section>

        {/* Data Security */}
        <section>
          <h2 className="text-xl font-semibold">5. Data Security</h2>
          <p>
          We implement industry-standard security measures to protect your personal information from unauthorised access, loss, alteration, or disclosure.
          However, please note that no data transmission over the internet or storage system can be guaranteed to be 100% secure.
          </p>
        </section>

        {/* Your Choices and Rights */}
        <section>
          <h2 className="text-xl font-semibold">6. Your Choices & Rights</h2>
          <p>
          You have the right to access, update, or delete your personal information, and you may opt-out of marketing communications at any time. To exercise
          these rights or for any privacy-related queries, please contact us at [insert contact details].
          </p>
        </section>

        {/* Changes to Policy */}
        <section>
          <h2 className="text-xl font-semibold">7. Changes to Privacy Policy</h2>
          <p>
          We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. We will post the updated version on our website
          with the revised effective date.
          </p>
        </section>

        {/* Contact Us */}
        <section>
          <h2 className="text-xl font-semibold">8. Contact Us</h2>
          <p>
          If you have any questions or concerns about our Privacy Policy or our privacy practices, please contact us at [insert contact details].
          </p>
        </section>

        {/* Consent Message */}
        <section className=" mt-6">
          <p className="font-medium">
          By accessing our website or using our services, you consent to the collection, use, and disclosure of your personal information as described in this Privacy Policy.
          </p>

          <p className="">Thank you for choosing VOTUHOT.</p>
        </section>
      </div>
    </div>
  );
}
