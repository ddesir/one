import React from 'react';
// import logo from './logo.svg';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './App.css';

class App extends React.Component {
  
  render() {
  	return <Unified />;
  }
}

function Unified() {
  return (
    <div className="App">
      <div className="grid">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
    );
}

export default App;
