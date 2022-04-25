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

                                        <button className='btn btn-sm btn-primary me-1'>Edit</button>


                                        <button className='btn btn-sm btn-danger'>Delete</button>
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