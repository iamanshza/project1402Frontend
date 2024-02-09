function Card({num,txt}){
    return(
        <div className="card-conatiner">
            <h3>Statement No.: {num+1}</h3>
            <h3>{txt}</h3>
            <div className="opt">
            
            <div className="option1">
            <input type="radio" name="ans" />
            <label htmlFor="ans">1 </label>
            
            </div>
            <div className="option2">
            <input type="radio" name="ans" />
            <label htmlFor="ans">2 </label>
            
            </div>
            <div className="option3">
            <input type="radio" name="ans" />
            <label htmlFor="ans">3 </label>
           
            </div>
            <div className="option4">
            <input type="radio" name="ans" />
            <label htmlFor="ans">4 </label>
            
            </div>
            <div className="option5">
            <input type="radio" name="ans" />
            <label htmlFor="ans">5  </label>
            
            </div>

           
            </div>
            <div className="opt-desc">
                <div className="first">(Least Likely) </div>
                <div className="last">(Highly Likely)</div>
            </div>
        </div>
    );
}
export default Card;