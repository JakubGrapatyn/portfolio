import Navbar from './components/Navbar';
import Home from './components/Home';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Create from './components/Create';
import BlogDetai from './components/BlogDetails';
import Info from './components/Info';
import Start from './components/Start';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path='/' element={<Start/>}/>
            <Route path='/kontakt' element={<Create/>}/>
            <Route path='/dane' element={<Info/>}/>
            <Route path='/projekty' element={<Home/>}/>
            <Route path='/:id' element={<BlogDetai/>}/>
          </Routes>
          </div>
      </div>
    </Router>
  );
}

export default App;
