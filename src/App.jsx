import React from 'react';
import Header from './components/Header';
import './index.css'; // Ensure Tailwind CSS is included

function App() {
  return (
    <>
    <div className="App">
      <Header />
      {/* Other components and content */}
      </div>
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <main>
        <section>
          <h1>Welcome to Our Landing Page</h1>
          <p>Discover our amazing products and services.</p>
          <button>Get Started</button>
        </section>

        <section>
          <h2>About Us</h2>
          <p>Learn more about our company and our mission.</p>
          <a href="#">Read More</a>
        </section>

        <section>
          <h2>Our Services</h2>
          <p>Check out the services we offer to our clients.</p>
          <ul>
            <li>Service 1</li>
            <li>Service 2</li>
            <li>Service 3</li>
          </ul>
        </section>

        <section>
          <h2>Contact Us</h2>
          <p>Get in touch with us for more information.</p>
          <form>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <textarea placeholder="Message"></textarea>
            <button type="submit">Submit</button>
          </form>
        </section>
      </main>

      <footer>
        <p>&copy; 2023 Landing Page. All rights reserved.</p>
      </footer>
    
      </>
  );
}

export default App;
