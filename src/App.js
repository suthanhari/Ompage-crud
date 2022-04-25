import './App.css';
import Createuser from './component/Createuser';
import Userlist from './component/Userlist';

// import Edituser from './component/Edituser';




function App() {



  return (
    <>
     
        <div className='container'>
          <div className='row'>
            <div className='col-md-3'>

              <Createuser />


            </div>

            <div className='col-md-9'>
              <Userlist/>
            </div>
              
          </div>

          
        </div>
      
    </>
  );
}

export default App;
