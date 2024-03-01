import React from 'react';
import Navbar from './Navbar';
import Module from './Module';
import Footer from './Footer';

function App() {
  return (
    <html>
      <head>
        <meta charSet="UTF-8" />
        <title>21Da-vtuedge.com</title>
        <meta name="description" content="Your website description here" />
        <meta name="keywords" content="your, keywords, here" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Add meta tags for SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Your Name" />
        {/* Add Google verification meta tag */}
        <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" />
      </head>
      <body>
        <Navbar />
        <div className="container mx-auto mt-8">
          <Module
            title="Text Book"
            link="https://drive.google.com/file/d/16FS1uTSFu_I4oKM7jU4qFswucJHtG1r6/view?usp=sharing"
          />
          <h1 className="text-4xl">hello</h1>
          {/* Add more Module components */}
        </div>
        <aside>
          {/* Add links for navigation */}
          <nav>
            <ul>
              <li><a href="#">Link 1</a></li>
              <li><a href="#">Link 2</a></li>
              <li><a href="#">Link 3</a></li>
            </ul>
          </nav>
        </aside>
        <div className="prev-model text-center mt-8">
          <a href="21previous.html" className="text-blue-500">Previous Papers</a>
        </div>
        <Footer />
      </body>
    </html>
  );
}

export default App;
