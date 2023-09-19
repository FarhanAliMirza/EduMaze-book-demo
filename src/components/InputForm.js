import React, { useState } from "react";
import "../index.css";
import { db } from "../firebase";

const InputForm = () => {
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [tel, setTel] = useState("");
const [tel1, setTel1] = useState("");
const [classs, setClasss] = useState("");

const handleSubmit = (e) =>{
  e.preventDefault();

  db.collection('Enquiry')
  .add({
    name:name,
    email:email,
    tel:tel,
    tel1:tel1,
    class:classs,
  })
  .then(()=>{
    alert('Form submitted')
  })
  .catch((error)=>{
    alert(error.message);
  })

   setClasss("");
   setEmail("");
    setName("");
    setTel("");
   setTel1("");
}



  const input =
    "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-white appearance-none focus:outline-none focus:ring-0 focus:border-light-orange peer";
  const label =
    "peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-light-orange  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6";

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div class="relative z-0 w-full mb-6 group">
        <input
          name="text"
          class={input}
          placeholder=" "
          required
          value={name}  
          onChange={(e)=>setName(e.target.value)}
        />
        <label for="floating_name" class={label}>
          Name
        </label>
      </div>
      <div class="relative z-0 w-full mb-6 group">
        <input
          
          name="email"
          class={input}
          placeholder=" "
          required
          value={email}  
          onChange={(e)=>setEmail(e.target.value)}
        />
        <label for="floating_email" class={label}>
          Email address
        </label>
      </div>
      <div class="relative z-0 w-full mb-6 group">
        <input
          
          name="tel"
          class={input}
          pattern="[0-9]{10}"
          placeholder=" "
          required
          value={tel}  
          onChange={(e)=>setTel(e.target.value)}
        />
        <label for="floating_phone" class={label}>
          Phone number (10-digit)
        </label>
      </div>
      <div class="relative z-0 w-full mb-6 group">
        <input
          
          name="tel1"
          class={input}
          placeholder=" "
          pattern="[0-9]{10}"
          required
          value={tel1}  
          onChange={(e)=>setTel1(e.target.value)}
        />
        <label for="floating_phone" class={label}>
          Parent's number (10-digit)
        </label>
      </div>
      <div class="relative z-0 w-full mb-6 group">
        <input
          
          name="classs"
          class={input}
          placeholder=" "
          required
          value={classs}  
          onChange={(e)=>setClasss(e.target.value)}
        />
        <label for="floating_name" class={label}>
          Class
        </label>
      </div>
      {/* <select
        id="current_class"
        type='class'
        class="bg-transparent mb-6 text-white border-white border-b-2 border-0 text-sm focus:text-light-orange focus:outline-none focus:ring-0 focus:border-light-orange block w-full py-2.5 px-0 peer"
        required
      >
        <option selected disabled>
          Select your class
        </option>
        <option>Class-X (ICSE)</option>
        <option>Class-X (CBSE)</option>
        <option>Class-XII (ISC)</option>
        <option>Class-XII (CBSE)</option>
        <option>Others</option>
      </select> */}
      <button
        
        type="submit"
        class="text-white bg-edu-orange hover:bg-light-orange focus:ring-4 focus:outline-none focus:ring-light-orange font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
      >
        Submit
      </button>
    </form>
  );
};

export default InputForm;
