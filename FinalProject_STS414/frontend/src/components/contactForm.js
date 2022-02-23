import  emailjs from "emailjs-com";
import React from 'react';
import{ init } from 'emailjs-com';
init("user_LKrHWBCYbw8Ess12HpkYk");



export default function ContactUs() {

    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('service_9nog4vp', 'template_lc173vs', e.target, 'user_LKrHWBCYbw8Ess12HpkYk')
        .then((result) => {
            alert("Message Sent!!!")
        }, (error) => {
            alert("Some Error Occured!!")
        });
        e.target.reset()
    }

    return(
        <div>
            <div> <br />
                <h1>Help and Support</h1>
            
            <div className="content">
            <form onSubmit={sendEmail}>
                    <div className="row pt-5 mx-auto">
                        <div className="col-8 form-group mx-auto">
                            <input type="text" className="form-control" placeholder="Name" name="name" required/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="email" className="form-control" placeholder="Email Address" name="email" required/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" placeholder="Subject" name="subject" required/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message" required></textarea>
                        </div>
                        <div className="col-8 pt-3 mx-auto">
                            <input type="submit" className="btn btn-info" value="Send Message"></input>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        </div>
    )
}
