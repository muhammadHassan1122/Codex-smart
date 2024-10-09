import React from 'react';

function Contact(props) {
    return (
        <div>
          <div>
        <h5 className="contact-heading">Get In Touch</h5>
        <h1 className="query-heading">Contact for any query</h1>
      </div>
            <main>
            
 <div class="form">
   <div class="title">
   <h1 id="title">Contact Form</h1>
  </div>
  <div className='form-small-container'>
  {/* <input type="text" className='input-container' placeholder='Enter your Full Name' aria-label='Enter your Full Name' /> */}
     <input type="text" id="name" placeholder="Enter your name" requiered></input>
     <input type="email" id="email" placeholder="Enter your email"  requiered></input>
     <input type="number" id="number" placeholder="Enter your age"></input>
     <select id="dropdown" name="rol">
       <option disable selected value>Select your current rol</option>
       <option value="student">Student</option>
       <option value="job">Full time job</option>
       <option value="freelancer">Freelancer</option>
       <option value="hunting">Looking for a job</option>
     </select>
     <textarea id="message" class="textarea uno" name="message" placeholder="Enter your message here..."></textarea>
     <button className='btn-container'>Submit Your Form</button>
  </div>
  </div>
</main>
        </div>
    );
}

export default Contact;