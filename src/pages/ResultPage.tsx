import NavBar from "./Components/NavBar"
import Matchcard from "./Matchcard";
import { CiSearch } from "react-icons/ci";



const ResultPage = () => {
  return (
    <>
    <NavBar/>
    <div className="resultPage">
    <div className="resultPageSearch cnt" >
    <p>Male Responses- 490 </p>  
    <p>Female Responses- 70 </p>      
    </div>

    <div className="resultPageSearch">
     <input type="text" className="search" placeholder="Enter Name..." />
     <button className="resultsearchbtn"><CiSearch /></button>
    </div>
    
    <Matchcard/>
   </div>

    </>
  )
}

export default ResultPage