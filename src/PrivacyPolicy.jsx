
function PrivacyPolicy() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Email Reply Assistant - Privacy Policy</h1>
        <p><strong>Last Updated: March 6, 2025</strong></p>
      </header>
      <br/>
      <br/>
      
      <section>
        <h2>Introduction</h2>
        <p>
          This Privacy Policy explains how Email Reply Assistant (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) collects, uses, and protects your information when you use our Chrome extension.
        </p>
        <br/>

        <h2>Information We Collect</h2>
        <h3>Email Content</h3>
        <p>
          When you use our AI Reply feature, the extension temporarily accesses the content of the email you&apos;re responding to. This content is sent to our secure API for processing.
        </p>
        <br/>

        <h3>User Preferences</h3>
        <p>
          We store your preferred tone settings (Professional, Casual, Friendly, or Sarcastic) locally on your device using Chrome&apos;s storage API.
        </p>
        <br/>

        <h2>How We Use Your Information</h2>
        <h3>Email Content</h3>
        <ul>
          <li>Your email content is processed solely to generate appropriate AI-powered replies.</li>
          <li>Content is transmitted to our servers, processed, and immediately used to generate a response.</li>
          <li>Content is not stored permanently on our servers.</li>
          <li>Content is processed immediately and not retained after generating your reply.</li>
        </ul>
        <br/>

        <h3>User Preferences</h3>
        <ul>
          <li>Your tone preferences are stored locally on your device to provide a personalized experience.</li>
          <li>These preferences are not transmitted to our servers.</li>
        </ul>
        <br/>
        <br/>

        <h2>Data Security</h2>
        <ul>
          <li>All communications between the extension and our API use secure HTTPS encryption.</li>
          <li>We implement appropriate security measures to protect against unauthorized access.</li>
          <li>Your email content is processed in temporary memory and not stored in persistent databases.</li>
        </ul>
        <br/>

        <h2>Third-Party Services</h2>
        <p>
          Our extension relies on our own API service to generate AI replies. No third-party services have access to your data.
        </p>
        <br/>

        <h2>Data Retention</h2>
        <ul>
          <li>Email content is processed in real-time and is not retained after generating your reply.</li>
          <li>User preferences are stored locally on your device until you uninstall the extension.</li>
        </ul>
        <br/>

        <h2>User Rights</h2>
        <p>
          You have the right to:
        </p>
        <ul>
          <li>Disable the extension at any time.</li>
          <li>Uninstall the extension, which will remove all locally stored preferences.</li>
          <li>Choose not to use the AI Reply feature for sensitive emails.</li>
        </ul>
        <br/>

        <h2>Children&apos;s Privacy</h2>
        <p>
          Our extension is not intended for use by individuals under 13 years of age.
        </p>
        <br/>

        <h2>Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on our website and updating the extension.
        </p>
        <br/>

        <h2>Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us at:
        </p>
        <ul>
          <li>Email: <a href="mailto:pratiksonthaliy6@gmail.com">pratiksonthaliy6@gmail.com</a></li>
          <li>Website: <a href="https://pratik-sonthaliya.vercel.app">pratik-sonthaliya.vercel.app</a></li>
        </ul>
        <br/>
      </section>
    </div>
  );
}

export default PrivacyPolicy;
