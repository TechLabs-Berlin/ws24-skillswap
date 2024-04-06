import React from 'react';
import './settings.css'

import { RiAccountCircleLine } from "react-icons/ri";
import { IoIosNotificationsOutline } from "react-icons/io";
import { PiTranslateLight } from "react-icons/pi";
import { IoDocumentTextOutline } from "react-icons/io5";
import { IoLockClosedOutline } from "react-icons/io5";
import { TbExclamationMark } from "react-icons/tb";
import { RxExit } from "react-icons/rx";




class SettingsPage extends React.Component {
  render() {
    return (
      <div className='settings'>
        <h1>Settings</h1>
        <ul>
          <div >
          <li> <RiAccountCircleLine /> Account </li>
         
          </div>
          
          <div >
          <li><IoIosNotificationsOutline /> Notifications</li>

          </div>
        
          <div >
          <li> <PiTranslateLight /> Change Language</li>
          </div>
          
          <div >
          <li> <IoDocumentTextOutline />Terms and Conditions</li>
          </div>
         
          <div >
          <li> <IoLockClosedOutline /> Privacy and Policy</li>
          </div>
       
          <div >
            <li> <TbExclamationMark /> About</li>
          </div>
         
          <div >
          <li> <RxExit />   Logout</li>
          </div>
       
        </ul>
      </div>
    );
  }
}

export default SettingsPage;