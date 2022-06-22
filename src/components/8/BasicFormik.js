import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const BasicFormik = () => {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().required('This field is required!'),
            email: Yup.string().email('Invalid email format!').required('This field is required!')
        }),
        onSubmit: (values, { resetForm }) => {
            console.log('Values to Submit', values)
            // resetForm()
        },
    })

    /*
    formik.handleChange => handleChange (event.target.value)
    */
    console.log('Errors Formik => ', formik.errors)
    return (
        <div>
            <h3>BasicFormik</h3>
            <div>
                <form onSubmit={formik.handleSubmit}>
                    <div>
                        <label htmlFor='name'>Name</label>
                        <input
                            id="name"
                            name='name'
                            value={formik.values.name}
                            onChange={formik.handleChange}
                        />
                        {formik.touched.name && formik.errors.name ? <p style={{ color: 'red' }}>{formik.errors.name}</p> : <p />}
                    </div>

                    <div>
                        <label htmlFor='email'>Email</label>
                        <input
                            id="email"
                            name='email'
                            value={formik.values.email}
                            onChange={formik.handleChange}
                        />
                        {formik.touched.email && formik.errors.email ? <p style={{ color: 'red' }}>{formik.errors.email}</p> : <p />}
                    </div>

                    <button type='submit'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default BasicFormik