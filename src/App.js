import './App.css';
import Edituser from './component/Edituser';
import Home from './component/Home';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";








function App() {



  return (
    <>
    <BrowserRouter>
      <div className='container'>
        <Home />

        <Routes>
          <Route path='/edit-user/:id' element={<Edituser/>} />
        </Routes>
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;
