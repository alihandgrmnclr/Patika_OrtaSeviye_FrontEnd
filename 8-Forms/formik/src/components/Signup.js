import React from 'react'
import { Formik, useFormik } from "formik"
import Validation from './Validation';

function Signup() {


    const { values, handleChange, handleSubmit, errors, touched , handleBlur } = useFormik({
        initialValues: {
            email: "",
            password: "",
            rePassword: "",
            // firstName: "",
            // lastName: "",
            // gender: "",
            // hobbies: "",
            // language: "turkish",
        },
        onSubmit: (values) => {
            console.log(values);
        },
        validationSchema: Validation
    });

    return (
        <div>
            <h1>Sign Up</h1>
            {/*Formik yapısında bulunan handleSubmit ve handleChange kullandık */}
            <form onSubmit={handleSubmit}>

                {/* <label htmlFor="firstName">First Name</label>
                <input name='firstName' value={values.firstName} onChange={handleChange} />

                <br /><br />

                <label htmlFor="lastName">Last Name</label>
                <input name='lastName' value={values.lastName} onChange={handleChange} />
                <br /><br />

                <label htmlFor="email">Email</label>
                <input type="email" name='email' value={values.email} onChange={handleChange} />
                <br /><br />

                <div>
                    Football
                    <input type="checkbox" name='hobbies' value="Football" onChange={handleChange} /> <br />
                </div>
                <div>
                    Racing
                    <input type="checkbox" name='hobbies' value="Racing" onChange={handleChange} /> <br />
                </div>
                <div>
                    Exercising
                    <input type="checkbox" name='hobbies' value="Exercising" onChange={handleChange} /> <br />
                </div>

                <span>Male</span>
                <input name='gender' type="radio" value="male" onChange={handleChange} />

                <span>Female</span>
                <input name='gender' type="radio" value="female" onChange={handleChange} />
                <br /><br />

                <select name="language" value={values.language} onChange={handleChange}>
                    <option value="turkish">turkish</option>
                    <option value="english">english</option>
                    <option value="french">french</option>
                </select> */}

                <label htmlFor="email">Email</label>
                <input type="email" name='email' value={values.email} onChange={handleChange} onBlur={handleBlur}/>
                {errors.email && touched.email && (<div className='error'>{errors.email}</div>)}
                <br /><br />

                <label htmlFor="password">Password</label>
                <input type="password" name='password' value={values.password} onChange={handleChange} onBlur={handleBlur}/>
                {errors.password && touched.password && (<div className='error'>{errors.password}</div>)}
                <br /><br />
                <label htmlFor="rePassword">rePassword</label>
                <input type="password" name='rePassword' value={values.rePassword} onChange={handleChange} onBlur={handleBlur}/>
                {errors.rePassword && touched.rePassword && (<div className='error'>{errors.rePassword}</div>)}     {/* touched kullanarak tıklanmış olan yerde error verdirdik. Bunun için onBlur gerekiyor */}
                <br /><br />

                <button type='submit'>Submit</button>

                <br /><br />

                <code>{JSON.stringify(values)}</code>
            </form>
        </div>
    )
}

export default Signup