import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Singin from "./components/Singin";
import Singup from "./components/Singup";
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Singup />} />
      <Route path="/signin" element={<Singin />} />
    </Routes></>
  );
}

export default App;
