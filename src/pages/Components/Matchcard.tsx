import React from 'react';

import pic from "../../assets/heart-removebg-preview.png"
import boy from "../../assets/boy-removebg-preview.png"
import girl from "../../assets/girl-removebg-preview.png"

interface MatchcardProps {
    p1Name: string;
    p1Age: number;
    p1Insta: string;
    p2Name: string;
    p2Age: number;
    p2Insta: string;
}

const Matchcard: React.FC<MatchcardProps> = ({ p1Name, p1Age, p1Insta, p2Name, p2Age, p2Insta }) => {
    return (
        <div className="resultDetails">
            <div className="leftPerson">
                <img src={boy} alt="p1image" className="p1pic" />
                <div className="p1Details">
                    <p>Name: {p1Name}</p>
                    <p>Age: {p1Age}</p>
                    <p>Insta id: {p1Insta}</p>
                </div>
            </div>
            <div className="mid">
                <img src={pic} alt="heart" className="heart" />
            </div>
            <div className="rightPerson">
                <img src={girl} alt="p2image" className="p2pic" />
                <div className="p2Details">
                    <p>Name: {p2Name}</p>
                    <p>Age: {p2Age}</p>
                    <p>Insta id: {p2Insta}</p>
                </div>
            </div>
        </div>
    );
}

export default Matchcard;
