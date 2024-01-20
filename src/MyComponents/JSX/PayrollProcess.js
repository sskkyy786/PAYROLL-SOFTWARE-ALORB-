import React from 'react'
import Header from './Header'
import "../CSS/PayrollProcess.css";

export default function PayrollProcess() {
  return (
    <>
    <Header/>
    <div className="payroll-process-container">
        <div className="payroll-process-head">
            <h3>Payroll Process</h3>
            
            <div className="help"><img src="myicons/question.png" alt=""/></div>
        </div>
        <hr/>
        <div className="table">
            <div>Payroll processed successfully!</div>
            <table>
                
                <thead>
                  <tr>
                    <th></th>
                    <th>May 2021</th>
                    <th>April 2021</th>
                    <th>Difference</th>
                  </tr>
                </thead>
                
                <tbody>
                 
                  <tr>
                    <td>Employees</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                  </tr>
                 
                  <tr>
                    <td>Gross Pay</td>
                    <td>Rs 0</td>
                    <td>Rs 0</td>
                    <td>Rs 0</td>
                  </tr>
                  <tr>
                    <td>Deductions</td>
                    <td>Rs 0</td>
                    <td>Rs 0</td>
                    <td>Rs 0</td>
                  </tr>
                  
                </tbody>
              </table>
              <div className="bottom-bar">
                <div>View Salary Statement</div>
                <div>Close</div>
              </div>
        </div>    
    </div>
    </>
  )
}
