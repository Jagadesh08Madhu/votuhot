import React from "react";

export default function CookiePolicy() {
  return (
    <div className="bg-gray-100 min-h-screen py-10 px-5 md:px-20">
      <div className="bg-white shadow-md rounded-lg p-6 md:p-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Cookie Policy
        </h1>

        <p className="text-gray-700">
          This is the Cookie Policy for <span className="font-semibold">Votuhot</span>, hPanel hosting{" "}
          <a href="https://bfinit.com" className="text-blue-600 hover:underline">
            https://bfinit.com
          </a>.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">What Are Cookies?</h2>
        <p className="text-gray-700 mt-2">
        As is common practice with almost all professional websites this site uses cookies, which are tiny files that are downloaded to your
        computer, to improve your experience. This page describes what information they gather, how we use it and why we sometimes need
        to store these cookies. We will also share how you can prevent these cookies from being stored however this may downgrade or
        ‘break’ certain elements of the sites functionality.
        </p>
        <p className="text-gray-700 mt-2"> For more general information on cookies see the <a className="underline" href="https://www.wikipedia.org/">Wikipedia</a> article on HTTP Cookies.</p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">How We Use Cookies</h2>
        <p className="text-gray-700 mt-2">
        We use cookies for a variety of reasons detailed below. Unfortunately in most cases there are no industry standard options for
        disabling cookies without completely disabling the functionality and features they add to this site. It is recommended that you leave on
        all cookies if you are not sure whether you need them or not in case they are used to provide a service that you use.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">Disabling Cookies</h2>
        <p className="text-gray-700 mt-2">
        You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). Be aware
        that disabling cookies will affect the functionality of this and many other websites that you visit. Disabling cookies will usually result in
        also disabling certain functionality and features of the this site. Therefore it is recommended that you do not disable cookies.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">The Cookies We Set</h2>
        <ul className="list-disc pl-5 text-gray-700 space-y-2 mt-2">
          <li><strong>Account-related cookies:</strong>  If you create an account with us then we will use cookies for the management of the sign-up process
            and general administration. These cookies will usually be deleted when you log out however in some cases they may remain
            afterwards to remember your site preferences when logged out.</li>

          <li><strong>Login-related cookies:</strong> we use cookies when you are logged in so that we can remember this fact. This prevents you from having
                to log in every single time you visit a new page. These cookies are typically removed or cleared when you log out to ensure that
                you can only access restricted features and areas when logged in.</li>

          <li><strong>Email newsletters related cookies:</strong>  This site offers newsletter or email subscription services and cookies may be used to
                remember if you are already registered and whether to show certain notifications which might only be valid to subscribed/
                unsubscribed users.</li>


          <li><strong>Order processing cookies:</strong>This site offers e-commerce or payment facilities and some cookies are essential to ensure
                that your order is remembered between pages so that we can process it properly.</li>


          <li><strong>Survey cookies:</strong>from time to time we offer user surveys and questionnaires to provide you with interesting insights,
                helpful tools, or to understand our user base more accurately. These surveys may use cookies to remember who has already
                taken part in a survey or to provide you with accurate results after you change pages.</li>


          <li><strong>Forms related cookies:</strong> when you submit data to through a form such as those found on contact pages or comment forms cookies
          may be set to remember your user details for future correspondence.</li>


          <li><strong>Site preference cookies:</strong>  In order to provide you with a great experience on this site we provide the functionality to set your
            preferences for how this site runs when you use it. In order to remember your preferences we need to set cookies so that this
            information can be called whenever you interact with a page is affected by your preferences.</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">Third-Party Cookies</h2>
        <p className="text-gray-700 mt-2">
        In some special cases we also use cookies provided by trusted third parties. The following section details which third party cookies
        you might encounter through this site.
        </p>
        <ul className="list-disc pl-5 text-gray-700 space-y-2 mt-2">
            <li> This site uses 
            Google Analytics which is one of the most widespread and trusted analytics solution on the web for helping us to
            understand how you use the site and ways that we can improve your experience. These cookies may track things such as how
            long you spend on the site and the pages that you visit so we can continue to produce engaging content.For more information on
            Google Analytics cookies, see the official 
            Google Analytics page.</li>

            <li> Third party analytics are used to track and measure usage of this site so that we can continue to produce engaging content.
            These cookies may track things such as how long you spend on the site or pages you visit which helps us to understand how we
            can improve the site for you.</li>

            <li>From time to time we test new features and make subtle changes to the way that the site is delivered. When we are still testing
            new features these cookies may be used to ensure that you receive a consistent experience whilst on the site whilst ensuring we
            understand which optimisations our users appreciate the most.</li>

            <li>We also use social media buttons and/or plug-ins on this site that allow you to connect with your social network in various ways.
            For these to work the following social media sites including; (List the social networks whose features you have integrated with
            your site?:12), will set cookies through our site which may be used to enhance your profile on their site or contribute to the data
            they hold for various purposes outlined in their respective privacy policies.</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">More Information</h2>
        <p className="text-gray-700 mt-2">
        Hopefully that has clarified things for you and as was previously mentioned if there is something that you aren’t sure whether you need
        or not it’s usually safer to leave cookies enabled in case it does interact with one of the features you use on 
        our sites:
        </p>
        <p className="text-gray-700 mt-2"> However if you are still looking for more information then you can contact us through one of our preferred contact methods:</p>
        <p className="mt-2">
          <strong>Email:</strong>{" "}
          <a href="mailto:support@bobosohomail.com" className="text-blue-600 hover:underline">
          votuhot@bobosohomail.com
          </a>
        </p>
      </div>
    </div>
  );
}
