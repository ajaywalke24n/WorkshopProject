
import './App.css';
import Layout from './components/layout/Layout';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout/>}/>
        
      </Routes>
    </Router>
  );
}

export default App;