import React, { useState } from "react"


export const Inputform = () => {
const [name, setName] = useState('');
const [city, setCity] = useState('');
const [role, setRole] = useState('');

const handleClick = (e)=>{
   e.preventDefault();
   console.log(name, city, role)
}

  return (
    <div className="container">
      <form onSubmit={handleClick}>
        <input type="text" name="name" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}/>
        <input type="text" name="city" placeholder="City" value={city} onChange={(e)=>setCity(e.target.value)}/>
        <input type="text" name="role" placeholder="Role" value={role} onChange={(e)=>setRole(e.target.value)}/>
        <button className="form-btn btn-primary">ADD</button>
      </form>
    </div>
  )
}
