import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Review from './Components/Review/Review';
import Dashboard from './Components/Dashboard/Dashboard';
import Blogs from './Components/Blogs/Blogs';
import About from './Components/About/About';
import NotFound from './Components/NotFound/NotFound';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className='App'>
      <h1 className='header-title'>Bookagraphy</h1>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/review" element={<Review></Review>} />
        <Route path="/dashboard" element={<Dashboard></Dashboard>} />
        <Route path="/blogs" element={<Blogs></Blogs>} />
        <Route path="/about" element={<About></About>} />
        <Route path="*" element={<NotFound></NotFound>} />
      </Routes>
    </div>
  );
}

export default App;
