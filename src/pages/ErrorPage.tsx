import NavBar from "./Components/NavBar";

export default function ErrorPage() {
    return (
      <>
        <NavBar/>
        <div style={{ padding: 20, height: '100vh', display: "flex", flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
        <h2 style = {{fontSize: 50}}>404: Page Not Found</h2>
      </div>
      </>
    );
  }