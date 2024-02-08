import "./App.css";
import NavBar from "./components/NavBar";
import NewsContainer from "./components/NewsContainer";
import {
  BrowserRouter,
  Switch,
  Route,
  Routes,
  Link,
  useRouteMatch,
} from "react-router-dom";

// function App() {
//   return (

//     <div>
//       <NavBar />
//       <div className="container my-4 mb-3">
//         <NewsContainer pageSize={18} category="science" />
//       </div>
//     </div>
//   );
// }

// export default App;

function App() {
  return (
    <div>
      <NavBar />
      {/* <div className="container my-4 mb-3"> */}
     
        <Routes>
          <Route
            exact
            path="/"
            element={
              <NewsContainer key="general" pageSize={18} category="general" />
            }
          />
     <Route
            exact
            path="/business"
            element={
              <NewsContainer key="business" pageSize={18} category="business" />
            }
          />




          {/* <Route exact path="/general" element={<NewsContainer key="general"  pageSize={18} category="general" />} /> */}
          <Route
            exact
            path="/entertainment"
            element={
              <NewsContainer
                key="entertainment"
                pageSize={18}
                category="entertainment"
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <NewsContainer key="health" pageSize={18} category="health" />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <NewsContainer key="science" pageSize={18} category="science" />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <NewsContainer key="sports" pageSize={18} category="sports" />
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
              />
            }
          />
        </Routes>
      
      {/* </div> */}
    </div>
  );
}
export default App;
