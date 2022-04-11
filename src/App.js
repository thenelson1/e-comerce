import React from 'react'
import Header from './components/Header';
import Operations from './components/Operations';
import Hero from './components/Hero';
import Collections from './components/Collections';
import Gallery from './components/Gallery';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';


function App() {

  const [reg, setReg] = React.useState(false)

  function toggleReg () { 
      setReg(prevState => !prevState)
  }

  return (
    <div className="App">
      <Header onClick={toggleReg}/>
      <Hero  reg={reg} />
      <Operations />
      <Collections />
      <Gallery />
      <Collections />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
