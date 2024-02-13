import pic from "../assets/heart-removebg-preview.png"
import boy from "../assets/boy-removebg-preview.png"
import girl from "../assets/girl-removebg-preview.png"

const Matchcard = () => {
    return (
     <>
      <div className="resultDetails">
      <div className="leftPerson">
      <img src={boy} alt="p1image" className="p1pic" />
       <div className="p1Details">
        <p>Name</p>
        <p>Age</p>
        <p>Insta id</p>
       </div>
      </div>
      <div className="mid">
      <img src={pic} alt="heart" className="heart" />
      </div>
      <div className="rightPerson">
      <img src={girl} alt="p2image" className="p2pic" />

      <div className="p2Details">
       <p>Name</p>
        <p>Age</p>
        <p>Insta id</p>
       </div>
      </div>
       
    </div>

     </>
    )
  }
  
  export default Matchcard;