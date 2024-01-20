import React from "react";
// import "./Header.css"; 
import "../CSS/Header.css"
// import 'https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css';

export default function Header() {
  return (
    <>
      <header>
        {/* <img src="" alt="LOGO" className="logo"/>  */}
        <div className="logo">
          <span id="logo">Logo</span>
        </div>
        <ul className="nav_links">
          <li>
            <a href="">
              <img src="icons/l_angle.svg" alt="" />
            </a>
          </li>
          <li>
            <a href="">
              <img src="icons/r_angle.svg" alt="" />
            </a>
          </li>
          <li className="search-wrap">
            <div className="search">
              <button type="submit" className="searchButton">
                {/* <i className="fa fa-search"></i> */}
                <img src="icons/Search.svg" className="search-img" alt="" />
              </button>
              <input type="text" className="searchTerm" placeholder="Search" />
            </div>
          </li>
          <li>
            <a href="">
              <img src="icons/Group 9354.svg" alt="" className="header-icons" />{" "}
              Add
            </a>
          </li>
          <li>
            <a href="">
              <img src="icons/Notification.svg" alt="" className="notif-icon" />
            </a>
          </li>
          <li>
            <a href="">
              <img src="icons/Group 9672.svg" alt="" className="notif-icon" />
            </a>
          </li>
          <li>
            <a href="#" className="logout">
              <img src="icons/Group 9679.svg" alt="" className="header-icons" />
              Logout
            </a>
          </li>
        </ul>
      </header>
      <div className="nav_links_vertical">
        <ul className="side-nav">
          <li>
            <a href="#">
              <img id="icons-push" src="icons/noun_Home_82867.svg" alt="" />
              <span className="nav-text">Home</span>{" "}
            </a>
          </li>
          <li>
            <a href="#">
              <img id="icons-push" src="icons/Page 1.svg" alt="" />
              <span className="nav-text">Project</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img id="icons-push" src="icons/noun_tick_1611495.svg" alt="" />
              <span className="nav-text">Task</span>{" "}
            </a>
          </li>
          <li>
            <a href="#">
              <img id="icons-push" src="icons/noun_chat_3917121.svg" alt="" />
              <span className="nav-text">Chat</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img id="icons-push" src="icons/Calendar.svg" alt="" />
              <span className="nav-text"> Apply for Leave</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img
                id="icons-push"
                className="big-icon"
                src="Side-Nav/Group 9683.svg"
                alt=""
              />
              <span className="nav-text">Attendance Record</span>{" "}
            </a>
          </li>
          <li>
            <a href="#">
              <img
                id="icons-push"
                src="icons/noun_folder folder_3218908.svg"
                alt=""
              />{" "}
              <span className="nav-text">File Organisation</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img
                id="icons-push"
                className="big-icon"
                src="Side-Nav/noun_add group_2977042.svg"
                alt=""
              />
              <span className="nav-text">People (invite)</span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
