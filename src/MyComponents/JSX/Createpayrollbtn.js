import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../CSS/Createpayrollbtn.css";
import Header from "./Header";
export default function Createpayrollbtn() {
  const [show, setShow] = useState(false);
  const [selectedDay, setSelectedDay] = useState('1st');
  const [selectedMonth, setSelectedMonth] = useState('January');
  const sentence = `Enable autolock IT Declaration on ${selectedDay} of ${selectedMonth}`;
  const [selectedDate, setSelectedDate] = useState('May 2021');
  const button_text = `Create payroll for ${selectedDate}`
  const modal_text = `Are you sure you want to create the payroll for the month of ${selectedDate}?`
  const [savedDay, setSavedDay] = useState('');
  const [savedMonth, setSavedMonth] = useState('');


  function Mini() {
    return (
      <>
        <div className="mini">
          <h3>Enable Auto IT Lock Declaration</h3>
          <div>Declaration will be auto locked on:</div>
          <select name="datee" id="datee" onChange={(e) => setSelectedDay(e.target.value)} value={selectedDay}>
            <option value="1st">1st</option>
            <option value="2nd">2nd</option>
            <option value="3rd">3rd</option>
            <option value="4th">4th</option>
            <option value="5th">5th</option>
            <option value="6th">6th</option>
            <option value="7th">7th</option>
            <option value="8th">8th</option>
            <option value="9th">9th</option>
            <option value="10th">10th</option>
            <option value="11th">11th</option>
            <option value="12th">12th</option>
            <option value="13th">13th</option>
            <option value="14th">14th</option>
            <option value="15th">15th</option>
            <option value="16th">16th</option>
            <option value="17th">17th</option>
            <option value="18th">18th</option>
            <option value="19th">19th</option>
            <option value="20th">20th</option>
            <option value="21st">21st</option>
            <option value="22nd">22nd</option>
            <option value="23rd">23rd</option>
            <option value="24th">24th</option>
            <option value="25th">25th</option>
            <option value="26th">26th</option>
            <option value="27th">27th</option>
            <option value="28th">28th</option>
            <option value="29th">29th</option>
            <option value="30th">30th</option>
            <option value="31st">31st</option>
          </select>

          <div>Of:</div>
          
          <select name="month" id="month" onChange={(e) => setSelectedMonth(e.target.value)} value={selectedMonth}>
            <option value="January">January</option>
            <option value="February">February</option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="June">June</option>
            <option value="July">July</option>
            <option value="August">August</option>
            <option value="September">September</option>
            <option value="October">October</option>
            <option value="November">November</option>
            <option value="December">December</option>
          </select>

          <button className="buttons" onClick={() => {setShow(false) ; setSavedDay(selectedDay); setSavedMonth(selectedMonth)}}>SAVE</button>
          <button className="buttons" onClick={() => {setShow(false) ; setSelectedDay(savedDay) ; setSelectedMonth(savedMonth)}}>CANCEL</button>
         
        </div>
      </>
    );
  }

  const [showMaxi, setShowMaxi] = useState(false);

  function Maxi() {
    return (
      <>
        <div className="maxi">
          <h3>Create Payroll</h3>
          <div>
            {/* Are you sure you want to create the payroll for the month of May
            2021? */}
            {modal_text}
          </div>
          {/* <button onClick={() => setShowMaxi(false)}><a href="">Confirm</a></button> */}
          {/* <button onClick={() => setShowMaxi(false)}>Confirm</button> */}
          <Link to="/payrollinput" onClick={() => setShowMaxi(false)}><button>Confirm</button></Link>
          <button onClick={() => setShowMaxi(false)}>Cancel</button>
          
        </div>
      </>
    );
  }

  return (

    <div>
      {/* { show && <Mini/> } */}

      {/* {show && (
        <>
          <div className="backdrop"></div>
          <Mini />
        </>
      )} */}

      {show && <div className="backdrop"></div>}
      {show && <Mini />}
      {showMaxi && <div className="backdrop"></div>}
      {showMaxi && <Maxi />}

      <Header/>
      <div className="big-container">
        <div className="head-container">
          <div>Create PAYROLL for the month of</div>
          <input type="month" width="50px" name="" id="month-year" min="1900-01" max="2024-12" onChange={(e) => setSelectedDate(e.target.value)} />
           
          
          {/* <div className="arrow">
            <img src="myicons/icons8-back-26.png" alt="prev-arrow" />
          </div> */}
          {/* <div className="block">
            <div className="month">Jan</div>
            <p className="year">2021</p>
          </div>
          <div className="block">
            <div className="month">Feb</div>
            <p className="year">2021</p>
          </div>
          <div className="block">
            <div className="month">Mar</div>
            <p className="year">2021</p>
          </div>
          <div className="block">
            <div className="month">Apr</div>
            <p className="year">2021</p>
          </div>
          <div className="block">
            <div className="month">May</div>
            <p className="year">2021</p>
          </div>
          <div className="block">
            <div className="month">Jun</div>
            <p className="year">2021</p>
          </div>
          <div className="block">
            <div className="month">Jul</div>
            <p className="year">2021</p>
          </div>
          <div className="block">
            <div className="month">Aug</div>
            <p className="year">2021</p>
          </div>

          <div className="arrow">
            <img src="myicons/icons8-forward-26.png" alt="next-arrow" />
          </div> */}
        </div>

        <div className="body-container">
          {/* <div className="head">May 2021</div> */}
          <div className="body">
            <img src="myicons/payroll_img.jpg" alt="payroll_img" />
            <div>
              <input type="checkbox" />
              {/* <span>
                Enable autolock IT Declaration on 5th day of the next month
              </span> */}
              <span>
                {sentence}
              </span>
              <button onClick={() => setShow(true)}>Edit</button>
            </div>
            <div>
              <input type="checkbox" />
              <span>
                Release IT Declaration for employees without declaration
              </span>
            </div>
            {/* <button
              className="create-payroll-btn"
              onClick={() => setShowMaxi(true)}
            >
              Create MAY 2021 payroll
            </button> */}
            <button
              className="create-payroll-btn"
              onClick={() => setShowMaxi(true)}
            >
              {button_text}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
