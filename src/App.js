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
          <Routes>
            <Route path='/' element={<Home />} />

          </Routes>
        </div>

        <div className='container'>
          <div className='row mt-2 d-flex justify-content-center'>
            <div className='col-md-6'>

              <Routes>
                <Route path='/edit-user/:id' element={<Edituser />} />
              </Routes>
            </div>
          </div>
        </div>

      </BrowserRouter>
    </>
  );
}

export default App;
