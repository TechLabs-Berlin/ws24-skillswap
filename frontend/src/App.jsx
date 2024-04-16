import { useState } from "react";
//import "./App.css";
import { Login } from "./form/login/Login";
import { Register } from "./form/registration/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./homepage/HomePage";
import Swappage from "./swappage/Swappage";
import Search from "./search/Search";
import MyProfile from "./myprofile/MyProfile";
import Footer from "./footer/Footer.jsx";
import Settings from "./setting/Settings.jsx";
import Message from "./message/message.jsx";
import Chat from "./message/MessageDetail.jsx";
import Skills from "./skill-list/skills.jsx";
import AddInterests from "./skill-list/addInterests.jsx";

import { SkillsProvider } from "./context/SkillsContext.jsx";

<<<<<<< HEAD
import Congrats from "./form/congrats/Congrats";
=======
import Congrats from './form/congrats/Congrats';
>>>>>>> 06b05b0ebf664b003389df2a71fe4fff3bacbc73

function App() {
  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <div className="App">
      <BrowserRouter>
<<<<<<< HEAD
        <Footer />
        <SkillsProvider>
          <Routes>
            <Route
              exact
              path="/"
              element={<Login onFormSwitch={toggleForm} />}
            />
            <Route
              path="/register"
              element={<Register onFormSwitch={toggleForm} />}
            />
            <Route
              path="/congrats"
              element={<Congrats onFormSwitch={toggleForm} />}
            />
            <Route path="/homepage" element={<HomePage />} />
            <Route path="/swappage" element={<Swappage />} />
            <Route path="/myProfile" element={<MyProfile />} />
=======
        <SkillsProvider>
          <Routes>
            <Route exact path="/" element={<Login onFormSwitch={toggleForm} />} />
            <Route path="/register" element={<Register onFormSwitch={toggleForm} />} />
            <Route path="/congrats" element={<Congrats onFormSwitch={toggleForm} />} />
            <Route path="/myProfile" element={<MyProfile />} />
            <Route path="/home" element={<Home />} />
>>>>>>> 06b05b0ebf664b003389df2a71fe4fff3bacbc73
            <Route path="/search" element={<Search />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/message" element={<Message />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/addInterests" element={<AddInterests />} />

<<<<<<< HEAD
            {/* //Onboarding
=======
          {/* //Onboarding
>>>>>>> 06b05b0ebf664b003389df2a71fe4fff3bacbc73
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
<<<<<<< HEAD
          </Routes>
=======
        </Routes>

>>>>>>> 06b05b0ebf664b003389df2a71fe4fff3bacbc73
        </SkillsProvider>
      </BrowserRouter>
    </div>
  );
}
export default App;
