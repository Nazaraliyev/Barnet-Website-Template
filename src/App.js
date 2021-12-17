import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Cases from './components/Cases/Cases';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path = '/' element = {<Home />} />
        <Route path = 'about' element = {<About />}/>
        <Route path = '/services' element = {<Services />} />
        <Route path = '/cases'  element = {<Cases />}/>
        <Route path = '/shop' element = {<Shop />} />
        <Route path = '/blog' element = {<Blog />}/>
        <Route path = '/contact' element = {<Contact />}/>
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
