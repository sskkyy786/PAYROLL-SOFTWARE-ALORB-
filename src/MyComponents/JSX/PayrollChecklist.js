import React, { useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import "../CSS/PayrollChecklist.css";

export default function PayrollChecklist() {
  const initialChecklist = [
    "Lock Previous Payroll",
    "Employee Confirmations",
    "Employee Data Updates",
  ];
  const [checklist, setChecklist] = useState(initialChecklist);
  const [completed, setCompleted] = useState([]);
  const [checkedItems, setCheckedItems] = useState({});

  const handleItemClick = (item) => {
    // Toggle the checked state for the clicked item
    setCheckedItems((prevCheckedItems) => ({
      ...prevCheckedItems,
      [item]: !prevCheckedItems[item],
    }));

    // Move the item from checklist to completed
    // setChecklist((prevChecklist) => prevChecklist.filter((checklistItem) => checklistItem !== item));
    // setCompleted((prevCompleted) => [...prevCompleted, item]);

    setTimeout(() => {
      // Move the item from checklist to completed
      setChecklist((prevChecklist) =>
        prevChecklist.filter((checklistItem) => checklistItem !== item)
      );
      setCompleted((prevCompleted) => [...prevCompleted, item]);
    }, 200);
  };

  return (
    <>
      <Header />
      <div className="payroll-process-container">
        <div className="payroll-process-head">
          <h3>Payroll Process</h3>
          <div className="help">
            <img src="myicons/question.png" alt="" />
          </div>
        </div>
        <hr />
        {/* <div className="checklist-body">
          <div className="heading">Checklist</div>
          <div className="heading">Completed Task</div>
        </div> */}
        <div className="checklist-body">
          <div className="checklist">
            <div className="heading">Checklist</div>
            <ul>
              {checklist.map((item) => (
                <div key={item}>
                  <input
                    type="checkbox"
                    checked={checkedItems[item] || false}
                    onChange={() => handleItemClick(item)}
                  />{" "}
                  {item}
                </div>
              ))}
            </ul>
          </div>

          <div className="completed">
            <div className="heading">Completed Task</div>
            <ul>
              {completed.map((item) => (
                <div key={item}>
                  <input
                    type="checkbox"
                    className="completed_checkbox"
                    checked
                  />{" "}
                  {item}
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="checklist-footer">
        <button
          onClick={() => {
            setChecklist(initialChecklist);
            setCompleted([]);
            setCheckedItems({});
          }}
          className="reset"
        >
          Reset
        </button>
        <Link to="/payrollprocess" className="pp">
          Process Payroll
        </Link>
        <button>Cancel</button>
      </div>
    </>
  );
}
