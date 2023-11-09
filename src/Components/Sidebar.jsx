/** @format */

import React from "react";
import dashbord from "../assets/img/dashboard.svg";
import appointment from "../assets/img/appointment.svg";
import labtest from "../assets/img/labtest.svg";
import medicine from "../assets/img/medicine.svg";
import messages from "../assets/img/message.svg";
import payment from "../assets/img/payment.svg";
import setting from "../assets/img/setting.svg";

function Sidebar() {
  return (
    <>
      <nav className='navbar navbar-inverse visible-xs'>
        <div className='container-fluid'>
          <div className='navbar-header'>
            <button
              type='button'
              className='navbar-toggle'
              data-toggle='collapse'
              data-target='#myNavbar'
            >
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>
            </button>

            <a className='navbar-brand logo ' href='#'>
              Medicine Sales
            </a>
          </div>

          <div className='collapse navbar-collapse' id='myNavbar'>
            <ul className='nav navbar-nav navbar-inxs '>
              <li>
                <a href='#section2'>
                  <img src={dashbord} alt='dashboard-icon' />
                  Dashboard
                </a>
              </li>
              <li>
                <a href='#section3'>
                  <img src={labtest} alt='labtest-icon' />
                  Lab Test
                </a>
              </li>
              <li>
                <a href='#section3'>
                  <img src={appointment} alt='appointment-icon' />
                  Appointment
                </a>
              </li>
              <li>
                <a href='#section3'>
                  <img src={medicine} alt='medicine-icon' />
                  Medicine Order
                </a>
              </li>
              <li>
                <a href='#section3'>
                  <img src={messages} alt='message-icon' />
                  Message
                </a>
              </li>
              <li>
                <a href='#section3'>
                  <img src={payment} alt='payment-icon' />
                  Payment
                </a>
              </li>
              <li>
                <a href='#section3'>
                  <img src={setting} alt='setting-icon' />
                  Settigs
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className='col-sm-2 sidenav hidden-xs '>
        <h2 className='logo '>Medicine Sales</h2>
        <ul className='nav nav-pills nav-stacked '>
          <li>
            <a href='#section2'>
              <img src={dashbord} alt='dashboard-icon' />
              Dashboard
            </a>
          </li>
          <li>
            <a href='#section3'>
              <img src={labtest} alt='labtest-icon' />
              Lab Test
            </a>
          </li>
          <li>
            <a href='#section3'>
              <img src={appointment} alt='appointment-icon' />
              Appointment
            </a>
          </li>
          <li>
            <a href='#section3'>
              <img src={medicine} alt='medicine-icon' />
              Medicine Order
            </a>
          </li>
          <li>
            <a href='#section3'>
              <img src={messages} alt='message-icon' />
              Message
            </a>
          </li>
          <li>
            <a href='#section3'>
              <img src={payment} alt='payment-icon' />
              Payment
            </a>
          </li>
          <li>
            <a href='#section3'>
              <img src={setting} alt='setting-icon' />
              Settigs
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
