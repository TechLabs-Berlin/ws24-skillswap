import { useState } from "react";
import "./App.css";
import { Login } from "./form/login/Login";
import { Register } from "./form/registration/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import Search from "./search/Search";
import MyProfile from "./myprofile/MyProfile";
import Footer from "./footer/Footer.jsx";
import Settings from "./setting/Settings.jsx";
import Message from "./message/message.jsx";
import Skills from "./skill-list/skills.jsx";
import AddInterests from "./skill-list/addInterests.jsx";



function App() {
  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login onFormSwitch={toggleForm} />} />
          <Route path="/register" element={<Register onFormSwitch={toggleForm} />} />
          <Route path="/myProfile" element={<MyProfile />} />
          <Route path="/home" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/message" element={<Message />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/addInterests" element={<AddInterests />} />
  

          {/* //Onboarding
           <Route path="/Onboarding" element={<Onboarding/>}/>
     <Route path="step-1" element={<OnboardingStep1/>}/>
     <Route path="step-2" element={<OnboardingStep2/>}/>  
          // etc for each onboarding step 
          
          //Homepage
          <Route path="/" element={<Homepage/>}/>
          
          //Connecting Pages
          <Route path="/connect" element={<Connecting/>}>
            <Route path="search" element={<Search/>}/>
            <Route path="swappages" element={<Swappages/>}/>
            // etc for each connecting process page
          </Route>
          
          //Swappages
          <Route path="/swappages" element={<Swappages/>}>
            //
          <Route path="confirm" element={<ConfirmSwap/>}/>
            // etc for swap pages
          </Route>
          <Route path="/profile" element={<Profile/>}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;

