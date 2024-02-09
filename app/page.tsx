'use client'
import React, { useState } from 'react';
import './globals.css'; // Import CSS file for styling
import Swiper from './Swiper';

import Card from './Card';

const page = () => {
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    instagramId: '',
    yearOfStudy: '',
  });
 
  // https://github.com/KumarUtsav1025/Project1402.git
  
  return (

    <div>
      <div className="form-container">
      <h1 >Find Your Match!</h1>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name"/>
        </div>
        <div>
          <label htmlFor="dob">Date of Birth:</label>
          <input type="date" id="dob" name="dob"/>
        </div>
        <div>
          <label htmlFor="instagramId">Instagram ID:</label>
          <input type="text" id="instagramId" name="instagramId"/>
        </div>
        <div>
          <label htmlFor="yearOfStudy">Year of Study:</label>
          <select id="yearOfStudy" name="yearOfStudy">
            <option value="">Select Year</option>
            <option value="1">First Year</option>
            <option value="2">Second Year</option>
            <option value="3">Third Year</option>
            <option value="4">Fourth Year</option>
          </select>
        </div>
       <div className="gender">
        <div className="male" style={{display : 'inline'}}>
        <input type="radio" name='gender' />
          <label htmlFor="gender" >Male</label>
        
        </div>
        <div className="female">
        <input type="radio" name='gender' />
        <label htmlFor="gender">Female</label>
        
        </div>
        
       </div>
    
      </form>
      <Swiper/>
      <button type="submit">Submit</button>
    </div>

      
  
  
    </div>
   
    
    
    
    


    

  );
};
export default page;
