import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import Get from './pages/get';
import Post from './pages/post';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/get" element={<Get />}/>
        <Route path="/post" element={<Post />}/>
      </Routes>
    </Router>
  );
}

export default App;