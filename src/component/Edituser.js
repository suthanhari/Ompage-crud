import axios from 'axios'
import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';


function Edituser(props) {

    const params = useParams()

    const formik = useFormik({
        initialValues: {
            name: "",
            slug: "",
            parent: "",
            description: ""
        },
        onSubmit: async values => {
            try {
                await axios.put(`https://6193477cd3ae6d0017da8485.mockapi.io/users/${params.id}`, values)
                alert("Submited Successfully")
            } catch (error) {
                console.log(error);
            }
        }

    });





    useEffect(() => {
        fetchUsers()
    }, [])



    const fetchUsers = () => {
        const fetch = async () => {
            try {
                let userData = await axios.get("https://6193477cd3ae6d0017da8485.mockapi.io/users");
                formik.setValues(userData.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetch()

    }
    

    
    return (
        <dialog open={props.shows} className='modal'>
            <div className='modal-content'>

                <form onSubmit={formik.handleSubmit}>


                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name"
                            name="name" onChange={formik.handleChange} value={formik.values.name} />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="slug" className="form-label">Slug</label>
                        <input type="text" className="form-control" id="slug"
                            name="slug" onChange={formik.handleChange} value={formik.values.slug}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="parent" className="form-label">Parent</label>
                        <select  className="form-select" as="select" name="parent" onChange={formik.handleChange} value={formik.values.parent} >
                            <option value="clothes">Clothes</option>
                            <option value="clothes">Clothes</option>
                            <option value="electronics">Electronics</option>
                            <option value="accessories">Accessories</option>
                            <option value="interiors">Interiors</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <textarea className="form-control" id="description" name='description' rows="3" onChange={formik.handleChange} value={formik.values.description}></textarea>
                    </div>

                    <button type="submit" className="btn  btn-primary">Create Category</button>


                </form >
            </div>
        </dialog>
    )
}

// export default Edituser