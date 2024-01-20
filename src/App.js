import "./App.css";
import Createpayrollbtn from "./MyComponents/JSX/Createpayrollbtn";
import PayrollInput from "./MyComponents/JSX/PayrollInput";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PayrollChecklist from "./MyComponents/JSX/PayrollChecklist";
import PayrollProcess from "./MyComponents/JSX/PayrollProcess";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Createpayrollbtn />} />
          <Route path="/payrollinput" element={<PayrollInput />} />
          <Route path="/payrollchecklist" element={<PayrollChecklist />} />
          <Route path="/payrollprocess" element={<PayrollProcess />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
