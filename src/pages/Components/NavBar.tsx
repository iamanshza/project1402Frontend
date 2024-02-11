import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>        
    <nav className="navBar" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 20px' }}>
    <div style={{ flex: 1 }}>Crushed</div>
    <div style={{ flexShrink: 0 }}>
      <Link to="/">
        <button style={{
          border: 'none',
          borderRadius: 5,
          cursor: 'pointer',
          color: 'white',
          backgroundColor:'#45a049',
          marginBottom:10, padding: '4px 8px', fontSize: '14px' }}>Home</button>
      </Link>
    </div>
  </nav></div>
  )
}

export default NavBar