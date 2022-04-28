import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


function Userlist() {


    const [user, setUser] = useState([]);



    useEffect(() => {
        fetchUsers()
        
    }, [])





    const fetchUsers = () => {
        const fetch = async () => {
            try {
                let userData = await axios.get("https://6193477cd3ae6d0017da8485.mockapi.io/users");
                setUser(userData.data);
                
            } catch (error) {
                console.log(error);
            }
        }
        fetch()

    }

    const handleDelete = async (id)=> {
        try {
            await axios.delete(`https://6193477cd3ae6d0017da8485.mockapi.io/users/${id}`)
            fetchUsers()
           



        } catch (error) {
            console.log(error);
        }
    }




    return (
        <>

            <table className="table table-borderless">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Slug</th>
                        <th scope="col">Parent</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user.map((data, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index}</td>
                                    <td>{data.name}</td>
                                    <td>{data.description}</td>
                                    <td>{data.slug}</td>
                                    <td>{data.parent}</td>
                                    <td>
                                        <Link to={`/edit-user/${data.id}`}>
                                            <button className='btn btn-sm btn-primary me-1'>Edit</button>
                                        </Link>


                                        {/* <button className='btn btn-sm btn-danger' onClick={handleShow}>Delete</button> */}



                                        <button type="button" class="btn btn-sm btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                            Delete
                                        </button>


                                        {/* <dialog open={show} class="modal" id="modal">
                                            <h2>Are You Sure?</h2>
                                            <p>Are you sure want to delete this record.</p>
                                            <button className='btn  btn-danger' onClick={() => handleDelete(data.id)}>Delete</button>
                                            <button class="btn btn-danger" onClick={handleCancel}>close modal</button>
                                        </dialog> */}
                                        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                            <div class="modal-dialog">
                                                <div class="modal-content">
                                                    <div class="modal-header">
                                                        <h5 class="modal-title" id="staticBackdropLabel">Are You Sure?</h5>
                                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <div class="modal-body">
                                                        Are you sure want to delete this Record?
                                                    </div>
                                                    <div class="modal-footer">
                                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={() => handleDelete(data.id)}>Delete</button>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })





                    }

                </tbody>
            </table>



        </>
    )
}

export default Userlist;