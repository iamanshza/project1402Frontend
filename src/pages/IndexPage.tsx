import { Link } from 'react-router-dom'

export const Indexpage = () => {
  return (
    <>
        <nav className="navBar">Crushed</nav>
        <div className='screenHeight'>
          <div className="indexContainer">
          <h1>Find Your Date!</h1>
            <img src="https://i.postimg.cc/28d1wKsZ/Designer.png" alt="dc"/>
                <Link to = './fillregistration'>
                  <button className="indexButton">Fill your details</button>
                </Link>
                <Link to = './results'>
                  <button className="indexButton">See your Date!</button>
                </Link>

          </div>
        </div>
        <footer className="ftr">
          Made with &#9829; <br />
          [By singles @NITRR For singles @NITRR.]
        </footer>
    </>
  )
}
