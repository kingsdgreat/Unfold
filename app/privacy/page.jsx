import React from 'react';
import Head from 'next/head';
import Footer from '@/components/Footer';

const PrivacyPolicyPage = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy | Unfold</title>
        <meta
          name="description"
          content="Unfold Privacy Policy - Learn how we protect your personal information and health data."
        />
      </Head>

      {/* Hero Section */}
      <section
        className="relative h-[350px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/image0.png')" }}
      >
        <div className="absolute inset-0 bg-[#00003D] opacity-50 z-0"></div>
        <h1 className="relative text-white text-4xl font-nunito font-semibold z-10">
          Privacy Policy
        </h1>
      </section>

      {/* Main Content */}
      <main className="relative max-w-5xl mx-auto bg-white p-10 rounded-lg shadow-xl space-y-8 transform md:-translate-y-24 z-20 mb-16">
        <h2 className="text-2xl font-semibold text-gray-900">1. Welcome</h2>
        <p className="text-gray-700 leading-relaxed">
          At Unfold, our mission is to empower individuals through active participation in managing their health and wellbeing. Our app blends journaling with data from your wearable device so you can understand your mind and body better. This Privacy Policy describes and governs the manner in which Unfold (“we,” “us,” “our” or the “Company”) collects, uses, maintains and discloses information about you when you visit our website and use our mobile application and other online services (the “Services”).
        </p>

        <h3 className="text-xl font-semibold text-gray-900">Our commitment</h3>
        <p className="text-gray-700 leading-relaxed">
          Our commitment to your privacy is not just an obligation, but a vital part of our mission to provide a secure and private journaling experience. When you entrust us with sensitive and personal information, we believe it is our most important responsibility to keep it as safe, secure, and private as we can, while still delivering you effective features and services in our products.
        </p>
        <p className="text-gray-700 leading-relaxed">
          We believe transparency is one of the most important values in building healthy relationships, and that extends to our relationship with our customers. We will do our best to provide clear and open communication about our data practices, giving you the power to make informed decisions about your data and its use within Unfold.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900">2. What Information We Collect</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed">
          <li>
            <strong>Account details:</strong> You provide us with personally identifiable information, such as your email address, when you register for an account or in your use of our services.
          </li>
          <li>
            <strong>Journal entries:</strong> Anything you write, record, or upload—your thoughts, feelings, voice notes, or images—is stored privately. We treat this as highly sensitive.
          </li>
          <li>
            <strong>Third-Party Health Information:</strong> With your permission, our Services connect to third-party applications and services (the “Third-Party Applications”), which may include Apple Health, Google Fit and other providers for whom you offer us permission to connect your Services. We connect to these Third-Party Applications solely for the purpose of importing certain health information about you. Such health information may include the following: heart rate, sleep information, movement and exercise activity, blood oxygen levels, respiratory rate, height, weight and age.
          </li>
          <li>
            <strong>Device and usage data:</strong> We automatically collect certain information about the device you use to access our services, including information about the device, IP address, and browser type. We also collect information about your interactions with our services, such as pages viewed and links clicked. This helps us fix bugs and improve features.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900">3. How We Use Collected Information</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed">
          <li>
            <strong>To provide the Services:</strong> We use your imported Health Information referenced above for purposes of providing our Services.
          </li>
          <li>
            <strong>To perform analysis:</strong> We may use your imported Health Information to benefit you and improve the insights we provide with our Services. When feasible, we do this using data that has been processed to protect your privacy.
          </li>
          <li>
            <strong>To provide and improve customer service:</strong> We use your contact information to answer your questions and respond to your requests and inquiries, notify you of changes to the Services and improve and maintain functionality of our Services.
          </li>
          <li>
            <strong>For analytical purposes:</strong> We may also use your activity on our Services in an anonymized and aggregate way in order to improve our Services. We may also use your information to protect the Company, our Services and our website, and to prevent fraud, theft and misconduct.
          </li>
          <li>
            <strong>Offering Tailored Content:</strong> We may use your data to personalize your experience on Unfold. This can range from remembering your settings and preferences, suggesting relevant features, or showing you content that aligns with your interests.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900">4. When We Share Information</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed">
          <li>
            <strong>Trusted service providers:</strong> We use these services for advanced computational tasks, including but not limited to, artificial intelligence operations and language processing. All data processed through these services is anonymized, containing only the contents of journal entries without any user-identifying information.
          </li>
          <li>
            <strong>Research partners:</strong> If we share data for scientific work, it is grouped together and stripped of details that could identify you.
          </li>
          <li>
            <strong>Legal reasons:</strong> We may share information when the law requires it or to protect someone’s safety, but only the minimum needed.
          </li>
          <li>
            <strong>Business changes:</strong> If Unfold merges with or is bought by another company, your data will move with the business. The new company must follow this policy.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900">5. Non-Disclosure of Sensitive Journal Data</h2>
        <p className="text-gray-700 leading-relaxed">
          Unfold stands firmly in its commitment to safeguard your sensitive journal data. It is against our values and company ethos to share, sell, or distribute your sensitive data to any third parties. We will never do this unless absolutely required by law.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900">6. Your Choices and Rights</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed">
          <li>Access your personal information</li>
          <li>Correct inaccurate or incomplete information</li>
          <li>Request deletion of your account and associated data</li>
          <li>To exercise these rights, please contact us at <a href="mailto:kings@tryunfold.ai" className="text-blue-600 underline">kings@tryunfold.ai</a></li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900">7. How We Keep Data Safe</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed">
          <li>
            <strong>Data Encryption:</strong> All data transmitted between you and our services is secured using strong encryption protocols. This includes the use of Secure Socket Layer (SSL) technology, which ensures that your data remains private and integral. Additionally, we use Google’s Firebase Firestore for data storage. Firestore automatically encrypts all data in transit and at rest, providing an added layer of security for your data.
          </li>
          <li>
            <strong>Access Control:</strong> We implement robust access control measures at the managerial level. Only authorized members of our staff can request access to sensitive user data solely for the purpose of resolving technical issues. Access is protected by a coordinated authentication system with 2FA and full audit logging.
          </li>
          <li>
            <strong>Employee Data Access:</strong> Our employees do not have access to production data, minimizing the risk of unauthorized access or exposure.
          </li>
          <li>
            <strong>Training:</strong> Our team is trained and updated on the latest security practices and data protection measures. This ensures that everyone who works on Unfold understands the importance of data security and knows how to handle user information responsibly.
          </li>
          <li>
            <strong>Third-Party Audits:</strong> While we haven’t conducted professional security risk assessments, we are committed to regular internal reviews of our security practices.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900">8. Children</h2>
        <p className="text-gray-700 leading-relaxed">
          Unfold is for users aged 13 and older. We do not knowingly collect data from children under 13. If you believe a child has provided us data, please let us know and we will delete it.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900">9. Cookies and Similar Tools</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed">
          <li><strong>Keep you logged in</strong> (essential)</li>
          <li><strong>Remember your preferences</strong> (functional)</li>
          <li><strong>See how people use the app so we can improve it</strong> (analytics)</li>
          <li><strong>Show relevant messages about Unfold</strong> (marketing, only with consent)</li>
        </ul>
        <p className="text-gray-700 leading-relaxed">
          You can turn cookies off in your browser or in our privacy settings, but some parts of the app may not work correctly.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900">10. Changes to This Policy</h2>
        <p className="text-gray-700 leading-relaxed">
          We have the discretion to update this Privacy Policy at any time. We encourage you to frequently check this page for any changes. You acknowledge and agree that it is your responsibility to review this Privacy Policy periodically and become aware of modifications. Subject to applicable law, your continued use of our Services shall be deemed an acceptance of our revised policy.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900">11. Contact Us</h2>
        <p className="text-gray-700 leading-relaxed">
          Have questions, concerns, or requests? Reach our privacy team at <a href="mailto:kings@tryunfold.ai" className="text-blue-600 underline">kings@tryunfold.ai</a>.
        </p>
      </main>
      <Footer />
    </>
  );
};

export default PrivacyPolicyPage;
