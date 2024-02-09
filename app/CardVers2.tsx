import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";

function CardVers2() {
  const qsn = [
    `I am the life of the party`,
    `I don't talk a lot.`,
    `I don't like to draw attention to myself.`,
    `I am relaxed most of the time.`,
    `I am interested in people.`,
    `I sympathize with others' feelings.`,
    `I  take time out for others.`,
    `I make a mess of things.`,
  ];

  const settings = {
    dots: true,
    infinite: false,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const sliderRef = useRef(null);

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <>
      <Slider ref={sliderRef} arrows={false} {...settings}>
        {qsn.map((item, index) => (
          <div className="container" key={index}>
            <div className="qsnTitle">Statement: {index + 1} </div>
            <div className="qsn">{item}</div>
            <div className="opt">
              <div className="option1">
                <input type="radio" name={`ans${index}`} />
                <label htmlFor={`ans${index}`}>1</label>
              </div>
              <div className="option2">
                <input type="radio" name={`ans${index}`} />
                <label htmlFor={`ans${index}`}>2</label>
              </div>
              <div className="option3">
                <input type="radio" name={`ans${index}`} />
                <label htmlFor={`ans${index}`}>3</label>
              </div>
              <div className="option4">
                <input type="radio" name={`ans${index}`} />
                <label htmlFor={`ans${index}`}>4</label>
              </div>
              <div className="option5">
                <input type="radio" name={`ans${index}`} />
                <label htmlFor={`ans${index}`}>5</label>
              </div>
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
