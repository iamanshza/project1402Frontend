"use client";
import React, { useState } from "react";
import "./globals.css"; // Import CSS file for styling
import {Link} from "react-router-dom";

// import Card from "./Card";
import CardVers2 from "./CardVers2";

const Page = () => {
  const [inputVal, setInputVal] = useState(Array(8).fill(""));

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    var { name, value } = event.target;
    if(name=='dob') value = calculateAge(new Date(value)).toString();
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const calculateAge = (birthDate:Date) => {
    const today = new Date();
    const dob = new Date(birthDate);
    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
      age--;
    }
    console.log(age);
    return age;
  };
  


const updateInputVal = (index: number, newVal: string) => {
  setInputVal(prevState => {
    const newState = [...prevState];
    newState[index] = newVal;
    return newState;
  });
};



  const [formData, setFormData] = useState({
    name: "",
    age: "",
    insta: "",
    year: "",
    gender: "",
    response: "",
  });

  const handleResult = () => {
    window.location.href = '/result';
  }

  const handleClick = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // console.log(inputVal);
    // Here you can handle form submission if needed
  };

  const handleSubmit = () => {
    if(inputVal[7] == '') alert('Fuck Off!');
    // console.log(inputVal);
    // Here you can handle form submission if needed
  };

  return (
   
    <>
      <nav className="navBar">Crushed
          {/* <button className="result" onClick={handleResult}>Result</button> */}
          <Link to="/ResultPage">ResultPage</Link>
          
      </nav>
      <div className="form-container">
        <h1>Find Your Match!</h1>
        <form onSubmit={handleClick}>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
          </div>
          <div>
            <label htmlFor="dob">Date of Birth:</label>
            <input type="date" id="dob" name="dob" onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="insta">Instagram ID:</label>
            <input type="text" id="insta" name="insta" onChange={handleChange}/>
          </div>
          <div>
            <label htmlFor="yearOfStudy">Year of Study:</label>
            <select id="yearOfStudy" name="yearOfStudy" onChange={handleChange}>
              <option value="">Select Year</option>
              <option value="1">First Year</option>
              <option value="2">Second Year</option>
              <option value="3">Third Year</option>
              <option value="4">Fourth Year</option>
              <option value="5">Fifth Year</option>
            </select>
          </div>
          <div className="gender">
            <div className="male" style={{ display: "inline" }}>
              <input type="radio" name="gender" value="male" checked={formData.gender === "male"} onChange={handleChange} />
              <label htmlFor="gender">Male</label>
            </div>
            <div className="female">
              <input type="radio" name="gender" value="female" checked={formData.gender === "female"} onChange={handleChange}/>
              <label htmlFor="gender">Female</label>
            </div>
          </div>
          <CardVers2 inputVal={inputVal} updateInputVal={updateInputVal} />
          <button type="button" className="btn" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
      {/* //<button className="btn btn-danger">gchc</button> */}
      <footer className="ftr">
        Made with &#9829; <br />
        [By singles @NITRR For singles @NITRR.]
      </footer>
      
    </>
   
  );
};

export default Page;
