import React from 'react';
import Createuser from './Createuser';
import Userlist from './Userlist';



function Home() {
    return (
      
            <div className='container'>
                <div className='row  mt-2'>
                    <div className='col-md-3'>

                        <Createuser />
                       
                    </div>


                    <div className='col-md-9'>
                        <Userlist />

                    </div>

                </div>
            </div>
        
    )
}

export default Home