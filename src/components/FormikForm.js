import React ,{useState} from 'react';
import { useForm } from "react-hook-form";
import './Form.css'



export default () => {

  /*
  const [name,setName] = useState('');
  const [status,setStatus] = useState('');
  const [email,setEmail] = useState('');
  const [message,setMessage] = useState('');
  
  
  
  const encode = (data) => {
    const formData = new FormData();
    Object.keys(data).forEach((k)=>{
      formData.append(k,data[k])
    });
    return formData
  }

  const handleSubmit = e => {
    
    
    const data = { "form-name": "contact", name, email, message }
    
    fetch("/", {
      method: "POST",
      // headers: { "Content-Type": 'multipart/form-data; boundary=random' },
      body: encode(data)
    })
    .then(() => setStatus("Form Submission Successful!!"))
    .catch(error => setStatus("Form Submission Failed!"));
    
    e.preventDefault();
  };
  
  const handleChange = e => {
    const {name, value} = e.target
    if (name === 'name' ){
      return setName(value)
    }
    if (name === 'email' ){
      return setEmail(value)
    }
    if (name === 'message' ){
      return setMessage(value)
    }
  }
  */
 const encode = (data) => {
  const formData = new FormData();
  Object.keys(data).forEach((k)=>{
    formData.append(k,data[k])
  });
  return formData
}

 const [status,setStatus] = useState('');
 const { register, handleSubmit,reset, errors  } = useForm();
 const onSubmit =  (e)  => {
      const data = { "form-name": "contact", ...e }
      console.log(data)
      fetch('/', {
        method: 'POST', 
        body: encode(data),
        })
      .then(() => {setStatus("Form Submission Successful!!")
      reset()})
      .catch(error => test("Form Submission Failed!"));
            
  };

 return (
   <div className="App">
      
      <form onSubmit={handleSubmit(onSubmit)}
        name="Contact Form"
        method="POST"
        netlify-honeypot="bot-field"
        data-netlify="true"        
        action="/thank-you/">
      <input type="hidden" name="bot-field" />
             <div>          
              <label>
                 <input type="text" name="name"  placeholder={'Your name'} ref={register({
                  required: true,
                  minLength: 2
                })} />
                {errors.name && errors.name.type === "required" && (<p>This field is required</p>)}
                {errors.name && errors.name.type === "minLength" && (<p>Minimum of 2 characters</p>)}
              </label>
             </div>
             <div> 
              <label>
                 <input type="email" name="email" placeholder={'Enter email'} ref={register({
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })} />
                {errors.email && errors.email.type === "required" && (<p>This field is required</p>)}
              </label>
            </div>
            <div>
              <label>
                 <textarea name="message" placeholder={'Your Message'} ref={register({
                  required: true,
                  minLength: 10
                  })} />
                  {errors.message && errors.message.type === "required" && (<p>This field is required</p>)}
                  {errors.message && errors.message.type === "minLength" && (<p>Minimum of 10 characters</p>)}
              </label>
            </div>
            
            <div>
            <input className="Button" type="submit" />
            </div>
          </form>
          <h3>{status}</h3>
      </div>
  );
}