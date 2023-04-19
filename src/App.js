//react
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//context
import { ApiContext } from "./context/ApiContext.jsx";
//styles
import "./styles/styles.scss";
//views
import Login from "./components/Views/Login/Login"
import Home from "./components/Views/Home/Home"

function App() {

  return (
    <ApiContext>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/home/:id" element={<Home />} />
        </Routes>
      </Router>
    </ApiContext>

  );
}

export default App;