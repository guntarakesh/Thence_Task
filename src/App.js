
import './App.css';
import { BrowserRouter as Router , Routes,Route } from 'react-router-dom';
import Form from './Components/Form';
import SuccessMessage from './Components/Onsucess';
import HomePage from './Components/HomePage';

function App() {
  return (
    
    <>
    <Router>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/form' element={<Form/>}></Route>
        <Route path='/sucess' element={<SuccessMessage/>}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
