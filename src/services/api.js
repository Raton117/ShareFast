import axios from 'axios';

import React from 'react'

const uploadfile = async(data) => {
  try{
    const res = await axios.post('http://localhost:5000/upload',data);
    return res.data;
    
  }catch(error){
    console.log(error.message);
    
  }
}

export default uploadfile