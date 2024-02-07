import "./App.css";
import NavBar from "./components/NavBar";
import NewsContainer from "./components/NewsContainer";

function App() {


  

  return (
    <div>
      <NavBar />
      <div className="container my-5">
     
        <NewsContainer />
      </div>
    </div>
  );
}

export default App;
