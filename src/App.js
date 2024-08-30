import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <body className="App-header">
        <Header />
        <Hero />
        <Services />
        <div className='jjj'>
          <h3 className='summary'>If you're concerned about your 
              online security or suspect something fishy in your relationship, message me or email me on how I can help.
              Your safety and security are our top priority!
          </h3>
        </div>
        <Footer />
      </body>
    </>
  );
}

export default App;
