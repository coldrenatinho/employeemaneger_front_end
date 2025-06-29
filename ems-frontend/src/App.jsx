import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ListEmployeeCompenent from "./componets/ListEmployeeCompenent";
import HeaderComponent from "./componets/HeaderComponent";
import FooterComponet from "./componets/FooterComponet";
import EmployeeComponent from "./componets/EmployeeComponent";
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<ListEmployeeCompenent />}></Route>
          <Route path="/employees" element={<ListEmployeeCompenent />}></Route>
          <Route
            path="/add-employee/:id"
            element={<EmployeeComponent />}
          ></Route>
        </Routes>
        <FooterComponet />
      </BrowserRouter>
    </>
  );
}

export default App;
