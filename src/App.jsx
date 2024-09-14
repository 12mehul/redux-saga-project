import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./Register";
import UserLists from "./UserLists";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/list" element={<UserLists />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
