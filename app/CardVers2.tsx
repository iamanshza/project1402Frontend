import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface ChildProps {
  inputVal: string[];
  updateInputVal: (index: number, newVal: string) => void;
}

function CardVers2({ inputVal, updateInputVal }: ChildProps) {
  const qsn: string[] = [
    `I am the life of the party`,
    `I don't talk a lot.`,
    `I don't like to draw attention to myself.`,
    `I am relaxed most of the time.`,
    `I am interested in people.`,
    `I sympathize with others' feelings.`,
    `I take time out for others.`,
    `I make a mess of things.`,
  ];

  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionChange = (index: number, value: string) => {
    setSelectedOption(value);
    updateInputVal(index, value);
  };

  const settings = {
    dots: true,
    infinite: false,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const sliderRef = useRef<Slider>(null);

  const next = () => {
    if(!selectedOption) alert("You Wanna die Single? Select proper option");
    else {setSelectedOption(null);
    sliderRef.current?.slickNext();}
    console.log(inputVal);
  };

  const previous = () => {
    sliderRef.current?.slickPrev();
  };

  return (
    <>
      <Slider ref={sliderRef} arrows={false} {...settings}>
        {qsn.map((item, index) => (
          <div className="container" key={index}>
            <div className="qsnTitle">Statement: {index + 1} </div>
            <div className="qsn">{item}</div>
            <div className="opt">
              {[1, 2, 3, 4, 5].map((option) => (
                <div className={`option${option}`} key={option}>
                  <input
                    type="radio"
                    name={`ans${index}`}
                    value={option.toString()}
                    checked={inputVal[index] === option.toString()}
                    onChange={() => handleOptionChange(index, option.toString())}
                  />
                  <label htmlFor={`ans${index}`}>{option}</label>
                </div>
              ))}
            </div>
            <div className="opt-desc">
              <div className="first">(Least Likely) </div>
              <div className="last">(Highly Likely)</div>
            </div>
          </div>
        ))}
      </Slider>
      <div className="btnContainer" style={{ textAlign: "center" }}>
        <button className="button prevBtn" onClick={previous}>
          Previous
        </button>
        <button className="button nxtBtn" onClick={next}>
          Next
        </button>
      </div>
    </>
  );
}

export default CardVers2;
