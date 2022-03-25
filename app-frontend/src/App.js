import Navigation from "./Components/Navigation";
import {Route,Routes} from "react-router-dom"
  
function App() {
  return (<>
      <Navigation/>
      <Routes>
        <Route exact path="/home" element={<h1>This is Home</h1>}/> 
      </Routes>
  </>
    );
}

export default App;
