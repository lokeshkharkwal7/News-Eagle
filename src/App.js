import { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import NewsContainer from "./components/NewsContainer";
import { Route, Routes } from "react-router-dom";

function App() {
  // creating hooks
  const [bgcolor, setBgcolor] = useState("white");
  const [navTheme, setNavtheme] = useState("light");
  const [cardColor, setCardcolor] = useState("white");

  const apikey = "d378917a12fc4fdab4e94e1faf036552";

  function themeChanger() {
    if (bgcolor === "white") {
      setBgcolor("black");
      setNavtheme("dark");
      setCardcolor("black");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";

      console.log("after log", bgcolor);
      //
    } else {
      setBgcolor("white");
      setNavtheme("light");
      setCardcolor("white");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  }

  console.log("The value of card Color inside App js is ", cardColor);

  return (
    <div>
      <NavBar themeChanger={themeChanger} navTheme={navTheme} /> <br /> <br />
      
      <Routes>
        <Route
          exact
          path="/"
          element={
            <NewsContainer
              key="general"
              pageSize={16}
              category="general"
              apikey={apikey}
              cardColor={cardColor}
            />
          }
        />
        <Route
          exact
          path="/business"
          element={
            <NewsContainer
              key="business"
              pageSize={18}
              category="business"
              apikey={apikey}
              cardColor={cardColor}
            />
          }
        />

        <Route
          exact
          path="/entertainment"
          element={
            <NewsContainer
              key="entertainment"
              pageSize={18}
              category="entertainment"
              apikey={apikey}
              cardColor={cardColor}
            />
          }
        />
        <Route
          exact
          path="/health"
          element={
            <NewsContainer
              key="health"
              pageSize={18}
              category="health"
              apikey={apikey}
              cardColor={cardColor}
            />
          }
        />
        <Route
          exact
          path="/science"
          element={
            <NewsContainer
              key="science"
              pageSize={18}
              category="science"
              apikey={apikey}
              cardColor={cardColor}
            />
          }
        />
        <Route
          exact
          path="/sports"
          element={
            <NewsContainer
              key="sports"
              pageSize={18}
              category="sports"
              apikey={apikey}
              cardColor={cardColor}
            />
          }
        />
        <Route
          exact
          path="/technology"
          element={
            <NewsContainer
              key="technology"
              pageSize={18}
              category="technology"
              apikey={apikey}
              cardColor={cardColor}
            />
          }
        />
      </Routes>
    </div>
  );
}
export default App;
