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
 const [status,setStatus] = useState('');
 const { register, handleSubmit, errors, formState:{isSubmitting}  } = useForm();
  const onSubmit = data => {    
      //console.log(data)
      //alert(JSON.stringify(data));
      
      fetch("/", {
        method: "POST",
        // headers: { "Content-Type": 'multipart/form-data; boundary=random' },
        body: JSON.stringify(data)
      })
      .then(() => setStatus("Form Submission Successful!!"))
      .catch(error => test("Form Submission Failed!"));
            
  };
 return (
   <div className="App">
      
      <form onSubmit={handleSubmit(onSubmit)} >
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
                  minLength: 30
                  })} />
                  {errors.message && errors.message.type === "required" && (<p>This field is required</p>)}
                  {errors.message && errors.message.type === "minLength" && (<p>Minimum of 30 characters</p>)}
              </label>
            </div>
            
            <div>
            <input className="Button" disabled={isSubmitting} type="submit" />
            </div>
          </form>
          <h3>{status}</h3>
      </div>
  );
}