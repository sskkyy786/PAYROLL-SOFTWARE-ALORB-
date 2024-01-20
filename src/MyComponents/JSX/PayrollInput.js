import React, { useState } from "react";
import Header from "./Header";
import "../CSS/PayrollInput.css";
import { Link } from "react-router-dom";

export default function PayrollInput() {
  const [show, setShow] = useState(false);

  const [editableText, setEditableText] = useState({
    payoutDetails1: "0",
    payoutDetails2: "0",
    payoutDetails3: "0",
    employeeDetails1: "0",
    employeeDetails2: "0",
    employeeDetails3: "0",
    // Add more editable text properties as needed
  });

  const [isEditing, setEditing] = useState(null);

  const handleDoubleClick = (field) => {
    setEditing(field);
  };

  const handleBlur = () => {
    setEditing(null);
  };

  const handleChange = (e) => {
    setEditableText({ ...editableText, [isEditing]: e.target.value });
  };

  function Lock() {
    return (
      <>
        <div className="lock">
          <h5>On locking payroll inputs below activities will be done</h5>
          <input type="checkbox" name="" id="" />
          <span>Lock IT declaration and Consider for Income Tax</span>
          <br />
          <input type="checkbox" name="" id="" />
          <span>Lock attendance and leave inputs</span>
          <hr />
          <span>Lock Date </span>
          <input type="date" name="" id="" />
          <div>
            <button onClick={() => setShow(false)}>Confirm</button>
            <button onClick={() => setShow(false)}>Cancel</button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      {show && <div className="backdrop"></div>}
      {show && <Lock />}
      <Header />
      <div className="big-containerr">
        <div className="process-input-body-container">
          <div className="headd">
            <div className="month-head">May 2021</div>
            <Link to="/payrollchecklist" className="process-payroll-btn">
              Process Payroll
            </Link>
          </div>
          <div className="bodyy">
            <div className="payout-details">
              <h4>Payout Details</h4>
              <div className="number">
                <div>
                  <span>Rs </span>
                  {isEditing === "payoutDetails1" ? (
                    <input
                      type="text"
                      value={editableText.payoutDetails1}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="input-rupee"
                      autoFocus
                    />
                  ) : (
                    <span
                      onDoubleClick={() => handleDoubleClick("payoutDetails1")}
                    >
                      {editableText.payoutDetails1}
                    </span>
                  )}
                </div>
                <p>text</p>
              </div>
              <div className="number">
                <div>
                  <span>Rs </span>
                  {isEditing === "payoutDetails2" ? (
                    <input
                      type="text"
                      value={editableText.payoutDetails2}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="input-rupee"
                      autoFocus
                    />
                  ) : (
                    <span
                      onDoubleClick={() => handleDoubleClick("payoutDetails2")}
                    >
                      {editableText.payoutDetails2}
                    </span>
                  )}
                </div>
                <p>text</p>
              </div>
              <div className="number">
                <div>
                  <span>Rs </span>
                  {isEditing === "payoutDetails3" ? (
                    <input
                      type="text"
                      value={editableText.payoutDetails3}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="input-rupee"
                      autoFocus
                    />
                  ) : (
                    <span
                      onDoubleClick={() => handleDoubleClick("payoutDetails3")}
                    >
                      {editableText.payoutDetails3}
                    </span>
                  )}
                </div>
                <p>text</p>
              </div>
              {/* Other payout details here */}
            </div>
            <div className="employee-details">
              <h4>Employee Details</h4>
              <div className="number">
                <div>
                  <span>Rs </span>
                  {isEditing === "employeeDetails1" ? (
                    <input
                      type="text"
                      value={editableText.employeeDetails1}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="input-rupee"
                      autoFocus
                    />
                  ) : (
                    <span
                      onDoubleClick={() =>
                        handleDoubleClick("employeeDetails1")
                      }
                    >
                      {editableText.employeeDetails1}
                    </span>
                  )}
                </div>
                <p>text</p>
              </div>
              <div className="number">
                <div>
                  <span>Rs </span>
                  {isEditing === "employeeDetails2" ? (
                    <input
                      type="text"
                      value={editableText.employeeDetails2}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="input-rupee"
                      autoFocus
                    />
                  ) : (
                    <span
                      onDoubleClick={() =>
                        handleDoubleClick("employeeDetails2")
                      }
                    >
                      {editableText.employeeDetails2}
                    </span>
                  )}
                </div>
                <p>text</p>
              </div>

              <div className="number">
                <div>
                  <span>Rs </span>
                  {isEditing === "employeeDetails3" ? (
                    <input
                      type="text"
                      value={editableText.employeeDetails2}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="input-rupee"
                      autoFocus
                    />
                  ) : (
                    <span
                      onDoubleClick={() =>
                        handleDoubleClick("employeeDetails3")
                      }
                    >
                      {editableText.employeeDetails2}
                    </span>
                  )}
                </div>
                <p>text</p>
              </div>
            </div>
            {/* Add other sections here */}
            <div className="rightmostside-panel">
              {/* Add rightmost side panel content here */}
              <div className="roww">
                <div className="rowhead">Payroll Inputs</div>
                <div className="rowbtn active">Unlock</div>
                <div onClick={() => setShow(true)} className="rowbtn">
                  Lock
                </div>
              </div>
              <div className="roww">
                <div className="rowhead">Employee View Release</div>
                <div className="rowbtn active">Release</div>
                <div className="rowbtn">Hold</div>
              </div>
              <div className="roww">
                <div className="rowhead">IT Statement Employee View</div>
                <div className="rowbtn active ">Release</div>
                <div className="rowbtn">Hold</div>
              </div>
              <div className="roww">
                <div className="rowhead">Payroll</div>
                <div className="rowbtn active">Unlock</div>
                <div onClick={() => setShow(true)} className="rowbtn">
                Lock
                </div> 
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
