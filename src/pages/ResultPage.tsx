import { useState } from 'react';
import NavBar from "./Components/NavBar";
import Memecard from "./Components/Meme";
import { CiSearch } from "react-icons/ci";
import { ToastContainer, toast } from 'react-toastify';
import Loader from './Components/Loader';
import Matchcard from './Components/Matchcard';

const BASE_URL = `https://project1402-backend.vercel.app`;

interface Person {
  _id: string;
  name: string;
  insta: string;
  age: number;
}

interface PairData {
  male: Person;
  female: Person;
}

const ResultPage = () => {
  const [pairDatas, setPairDatas] = useState<PairData[]>([]);
  const [searchValue, setSearchValue] = useState('');
  const [showMatchcard, setShowMatchcard] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const fetchPairs = async () => {
    try {
      const response = await fetch(`${BASE_URL}/api/getPair/name/${searchValue}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const pairDatas = await response.json();
      setPairDatas(pairDatas);
      setShowMatchcard(true);
    } catch (error) {
      console.error('Error fetching pair data:', error);
      toast.error('Failed to fetch pair data. Please try again.');
    } finally {
      setSubmitting(false);
    }
  }

  const handleSubmit = () => {
    if (searchValue !== '') {
      setSubmitting(true);
      fetchPairs();
    } else {
      toast.warn('Please fill the search field.');
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  return (
    <>
      <NavBar/>
      <div className="resultPage">
        <div className="resultPageSearch cnt" >
          <h2>Male Responses: 490 </h2>  
          <h2>Female Responses: 70 </h2>      
        </div>
        <h1 style={{paddingBottom:'10px'}}>Find your Match!</h1>
        <div className="resultPageSearch">
          <input 
            type="text" 
            className="search" 
            placeholder="Enter Name..." 
            value={searchValue} 
            onChange={handleChange} 
          />
          <button className="resultsearchbtn" onClick={handleSubmit} disabled={submitting}>{submitting ? <h1>..</h1> : <CiSearch/>}</button>
        </div>
        <div style={{padding:'10px'}}></div>
        {
          submitting ? <div style={{height : '55vh'}}>
            <Loader/>
          </div> :
            (showMatchcard && pairDatas.length > 0) ? (
              pairDatas.map((pair, index) => (
                <Matchcard
                  key={index}
                  p1Name={pair.male ? pair.male.name : 'Nahi Mila'}
                  p1Age={pair.male ? pair.male.age : 0}
                  p1Insta={pair.male ? pair.male.insta : 'better luck next time'}
                  p2Name={pair.female ? pair.female.name : 'Nahi Mili'}
                  p2Age={pair.female ? pair.female.age : 0}
                  p2Insta={pair.female ? pair.female.insta : 'better luck next time'}
                />
              ))
            ) : (
              <div style={{display:'flex', height:'42vh',paddingTop:'10px',flexDirection:'column', justifyContent:'center', textAlign:'center'}}>
                {(showMatchcard && pairDatas.length == 0) ? (<h1> No records Found</h1>) : <div></div>}
                <Memecard />
              </div>
            )
        }
      </div>
      <div style={{padding:'20px'}}></div>
      <footer className="ftr">
          Made with &#9829; <br />
          [By singles @NITRR For singles @NITRR.]
        </footer>
      <ToastContainer/>
    </>
  )
}

export default ResultPage;
