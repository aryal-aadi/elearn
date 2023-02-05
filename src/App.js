
import './App.css';
import Nav from './navigation/nav'
// import Homecon from './pages/homecon';
import Index from './pages/1index';
import Form from './pages/2form';
import Courses from './pages/3courses';
import Mstones from './pages/4milestones';
import Join from './pages/5join';

import Footer from './endfooter/footer';
function App() {
  return (
    <>
  <Nav/>
  {/* <Homecon/> */}
  <Index/>
  <Form/>
  <Courses/>
  <Mstones/>
  <Join/>
  <Footer/>
  </>
  
  );
}

export default App;
