import React, { useState } from 'react';
import Header from '../components/Header';
import emailjs from '@emailjs/browser';

const initialState = {name : "",email : "",mobile : "", message : ""}

const Contact = () => {

    const [user,setUser] = useState(initialState)
    const [status,setStatus] = useState('idle')
    const[errorMessage,setErrorMessage] = useState(null)
    
    function handleSubmit(e) {
        const{name,email,message,mobile } = user;
        e.preventDefault()
        //check if user filled  the all fields
        if(!name  || !email || !message || !mobile) {
            setStatus('error')
            setErrorMessage("Please fill all fields")
            return;
        }

        setStatus('submitting')
        emailjs.send(
            process.env.REACT_APP_EMAIL_JS_SERVICE_ID,
            "template_homsepo",
            user,
            process.env.REACT_APP_EMAIL_JS_API_PUBLIC_KEY
        )
            .then((res)=> {
                console.log(res.text)
                setStatus("success")
                setUser((prevState)=> initialState)
                setTimeout(() => {
                    setStatus('idle');
                }, 3000);
            })
            .catch((err)=> {
                console.log(err)
                setErrorMessage(err.message)
                setStatus("error")
                setTimeout(()=> {})
                setStatus("idle")

            },3000)

    }               

    function handleChange(e) {
    const {name,value} = e.target;
    setUser({...user,[name]:value})
    }

    return (
        <>
            <Header title='contact me' />
            {
                status === "error" ? <h3 className={"error"}>{errorMessage}</h3> :
                status ==="success" ? <h3 className={"success"}>Submitted</h3> : null
            }
                <section className={"contact"}>

                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" value={user.name} onChange={handleChange} />
                        </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" value={user.email} onChange={handleChange}  />
                    </div>
                    <div className="form-group">
                        <label htmlFor="mobile">Mobile</label>
                        <input type="number" name="mobile" id="mobile" value={user.mobile} onChange={handleChange}  />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Message</label>
                        <textarea name="message" id="message" cols="30" rows="10" value={user.message} onChange={handleChange} ></textarea>
                    </div>
                    <button className="btn btn-send" type={"submit"} disabled={status === "submitting"}>{status ==="submitting"? "Sending.." : "Send"}</button>
                </form>
        </section>
        </>
    );
}



export default Contact;
