import { useState } from "react";
import { Login } from "./form/login/Login";
import { Register } from "./form/registration/Register";
import HomePage from "./homepage/HomePage";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="register"
            element={<Register onFormSwitch={toggleForm} />}
          />
          <Route path="login" element={<Login onFormSwitch={toggleForm} />} />
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/swap" element={<Swap />} /> */}
          {/* 
          <Route path="/swappages" element={<Swappages />} /> */}

          {/* //Onboarding
           <Route path="/Onboarding" element={<Onboarding/>}/>
     <Route path="step-1" element={<OnboardingStep1/>}/>
     <Route path="step-2" element={<OnboardingStep2/>}/>  
          // etc for each onboarding step 
          
          
          //Connecting Pages
          <Route path="/connect" element={<Connecting/>}>
            <Route path="search" element={<Search/>}/>
            <Route path="swappages" element={<Swappages/>}/>
            // etc for each connecting process page
          </Route>
          
          </Route>
          <Route path="/profile" element={<Profile/>}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
