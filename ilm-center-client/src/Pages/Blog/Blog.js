import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Blog = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <h1 className="text-3xl text-center font-bold font-serif my-5 ">
        Some important interview Qustions
      </h1>
      <div
        data-aos="fade-right"
        className="ml-20 mr-4 border border-2 rounded-3xl p-4  shadow-2xl my-8 "
      >
        <h1 className="text-2xl font-bold">Q.1 what is cors?</h1>
        <div className="block md:flex my-2">
          <p className="font-bold mx-2">Answer: </p>
          <p className="font-medium text-lg">
            Cross-Origin Resource Sharing (CORS) is an HTTP-header based
            mechanism that allows a server to indicate any origins (domain,
            scheme, or port) other than its own from which a browser should
            permit loading resources. CORS also relies on a mechanism by which
            browsers make a "preflight" request to the server hosting the
            cross-origin resource, in order to check that the server will permit
            the actual request. In that preflight, the browser sends headers
            that indicate the HTTP method and headers that will be used in the
            actual request. <br></br>
            <br></br>
            An example of a cross-origin request: the front-end JavaScript code
            served from https://domain-a.com uses XMLHttpRequest to make a
            request for https://domain-b.com/data.json.
            <br></br>
            <br></br>
            For security reasons, browsers restrict cross-origin HTTP requests
            initiated from scripts. For example, XMLHttpRequest and the Fetch
            API follow the same-origin policy. This means that a web application
            using those APIs can only request resources from the same origin the
            application was loaded from unless the response from other origins
            includes the right CORS headers.
          </p>
        </div>
      </div>
      <div
        data-aos="fade-left"
        className="ml-20 mr-4 my-8 border border-2 rounded-3xl p-4   shadow-2xl"
      >
        <h1 className="text-2xl font-bold">
          Q.2 Why are you using firebase? What other options do you have to
          implement authentication?
        </h1>
        <div className="block md:flex my-2">
          <p className="font-bold mx-2">Answer: </p>
          <p className="font-medium text-lg">
            The Firebase Realtime Database is a cloud-hosted database. Data is
            stored as JSON and synchronized in realtime to every connected
            client. When you build cross-platform apps with our Apple platforms,
            Android, and JavaScript SDKs, all of your clients share one Realtime
            Database instance and automatically receive updates with the newest
            data.
            <br />
            <br />
            Besides this it has following benefits:
            <ul className="list-disc ml-4 md:ml-8">
              <li>Google Analytics For Firebase</li>
              <li>Realtime Database & Firestore</li>
              <li>Authentication</li>
              <li>Crashlytics</li>
              <li>Free Use of Dynamic Links</li>
            </ul>
            <br />
            Alternatives of Firebase
            <ul className="list-disc ml-4 md:ml-8">
              <li>MongoDB.</li>
              <li>Oracle Database.</li>
              <li>Amazon Redshift.</li>
              <li>DataStax Enterprise.</li>
              <li>Redis Enterprise Cloud.</li>
              <li>Cloudera Enterprise Data Hub.</li>
              <li>Db2.</li>
              <li>Couchbase Server.</li>
            </ul>
          </p>
        </div>
      </div>
      <div
        data-aos="fade-up-right"
        className="ml-20 my-8 mr-4 border border-2 rounded-3xl p-4   shadow-2xl"
      >
        <h1 className="text-2xl font-bold">
          Q.3. How does the private route work?
        </h1>
        <div className="block md:flex my-2">
          <p className="font-bold text-lg mx-2">Answer: </p>
          <p className="font-medium text-lg">
            The react private route component renders child components
            (children) if the user is logged in. If not logged in the user is
            redirected to the /login page with the return url passed in the
            location state property.
            <br></br>
            Private Routes in React Router (also called Protected Routes)
            require a user being authorized to visit a route (read: page). So if
            a user is not authorized for a specific page, they cannot access it.
            The most common example is authentication in a React application
            where a user can only access the protected pages when they are
            authorized (which means in this case being authenticated).
            Authorization goes beyond authentication though. For example, a user
            can also have roles and permissions which give a user access to
            specific areas of the application.
          </p>
        </div>
      </div>
      <div
        data-aos="fade-up-right"
        className="ml-20 my-8 mr-4 border border-2 rounded-3xl p-4   shadow-2xl"
      >
        <h1 className="text-2xl font-bold">
          Q. 4 What is Node? How does Node work?
        </h1>
        <div className="block md:flex my-2">
          <p className="font-bold text-lg mx-2">Answer: </p>
          <p className="font-medium text-lg">
            <span className="font-bold">Node.js</span> is an open-source, cross-platform, back-end JavaScript
            runtime environment that runs on a JavaScript Engine and executes
            JavaScript code outside a web browser, which was designed to build
            scalable network applications
            <br></br>
            <br></br>
            <span className="font-bold">Working of Node.js:</span> Node.js accepts the request from the clients and
            sends the response, while working with the request node.js handles
            them with a single thread. To operate I/O operations or requests
            node.js use the concept of threads. Thread is a sequence of
            instructions that the server needs to perform. It runs parallel on
            the server to provide the information to multiple clients. Node.js
            is an event loop single-threaded language. It can handle concurrent
            requests with a single thread without blocking it for one request.
            Node.js basically works on two concept Asynchronous Non-blocking I/O
            Non-blocking I/o: Non-blocking i/o means working with multiple
            requests without blocking the thread for a single request. I/O
            basically interacts with external systems such as files, databases.
            Node.js is not used for CPU-intensive work means for calculations,
            video processing because a single thread cannot handle the CPU
            works. Asynchronous: Asynchronous is executing a callback function.
            The moment we get the response from the other server or database it
            will execute a callback function. Callback functions are called as
            soon as some work is finished and this is because the node.js uses
            an event-driven architecture. The single thread doesn’t work with
            the request instead it sends the request to another system which
            resolves the request and it is accessible for another request.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
