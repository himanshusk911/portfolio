import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import "./styles/App.css"
function App() {
  return (
   <Router>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
   </Router>
  );
}

export default App;
