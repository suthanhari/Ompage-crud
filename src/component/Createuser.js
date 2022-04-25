import axios from 'axios';
import {useFormik } from 'formik';
import React from 'react'

function Createuser() {
    const formik = useFormik({
        initialValues: {
            name: "",
            slug: "",
            parent: "",
            description: ""
        },
        onSubmit: async values => {
            try {
                await axios.post("https://6193477cd3ae6d0017da8485.mockapi.io/users", values)
                alert("Submited Successfully")
            } catch (error) {
                console.log(error);
            }
        }

    });

    

    return (
        <>
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

                <button type="submit"  className="btn btn-primary">Create Category</button>


            </form>
        </>
    )
}

export default Createuser