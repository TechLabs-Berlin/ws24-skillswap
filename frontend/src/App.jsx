import { useState } from "react";
//import "./App.css";
import { Login } from "./form/login/Login";
import { Register } from "./form/registration/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./homepage/HomePage";
import Swappage from "./swappage/Swappage";
import Search from "./search/Search";
import MyProfile from "./myprofile/MyProfile";
import Settings from "./setting/Settings.jsx";
import Message from "./message/message.jsx";
import Chat from "./message/MessageDetail.jsx";
import Skills from "./skill-list/skills.jsx";
import AddInterests from "./skill-list/addInterests.jsx";

import { SkillsProvider } from "./context/SkillsContext.jsx";
import Congrats from "./form/congrats/Congrats";

function App() {
  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <div className="App">
      <BrowserRouter>
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
            <Route path="/search" element={<Search />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/message" element={<Message />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/addInterests" element={<AddInterests />} />
          </Routes>
        </SkillsProvider>
      </BrowserRouter>
    </div>
  );
}
export default App;
