import React, { useState } from 'react'

export default function Contact() {
  const [data, setData] = useState({
    fullname: '',
    phone: '',
    eemail: '',
    message: '',
  });
  const formSubmit = (e) =>{
    e.preventDefault ();
    alert (
      `My name is ${data.fullname}. My mobile number is ${data.phone} and email is ${data.email}, Hers is what I want to say ${data.message} `
    );
  };

  const inputEvent =(event) =>{
    const {name, value} = event.target;
    setData((preval) =>{
      return{
        ...preval,
        [name] : value,
      }
    })
  };
  return (
    <>
    <div className="my-5">
      <h1 className="text-center">Contact Us</h1>
    </div>
    <div className="container contact_div">
        <div className="row">
            <div className="col-10 col-md-6 mx-auto">
              <form onSubmit={formSubmit}>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Full Name</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" name="fullname" value={data.fullname} onChange={inputEvent} placeholder="Enter your name"/>
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Phone number</label>
                <input type="number" className="form-control" id="exampleFormControlInput1" name="phone" value={data.phone} onChange={inputEvent} placeholder="Enter your phone number"/>
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={inputEvent} placeholder="name@example.com"/>
              </div>
              <div className="mb-3">
                <label  className="form-label">message</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="message" value={data.message} onChange={inputEvent}></textarea>
              </div>
              <div class="col-12">
                <button class="btn btn-outline-primary" type="submit">Submit form</button>
              </div>  
              </form>
            </div>
        </div>
    </div>
     
    </>
  )
}
