import React,{useState} from 'react';
import axios from 'axios';

const AddItem = () => {
    const [name,setName] = useState('');
    const [avatar,setAvatar] = useState('');
    const [price,setPrice] = useState(0);

    const handleSubmit = ( ) =>{

        axios.post('https://60968942116f3f00174b33b7.mockapi.io/api/v1/articles')
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
    }
  return (
    <form onSubmit={handleSubmit}>
    <label>Enter your name:
    <input 
      type="text" 
      name="name" 
      value={name} 
      onChange={(e)=>setName(e.target.value)}
    />
    </label>
    <label>Enter your Avatar:
      <input 
        type="text" 
        name="age" 
        value={avatar} 
        onChange={(e)=>setAvatar(e.target.value)}
      />
      </label>
      <label>Enter Price:
      <input 
        type="number" 
        name="price" 
        value={price} 
        onChange={(e)=>setPrice(e.target.value)}
      />
      </label>
      <input type="submit" />
  </form>
    
     
  )
}

export default AddItem