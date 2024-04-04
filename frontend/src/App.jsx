import React from "react";
import Home from "./home/Home";
import Search from "./search/Search";
import MyProfile from "./myprofile/MyProfile";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from "./footer/Footer.jsx";
import Settings from "./setting/Settings.jsx";
import Message from "./message/message.jsx";
import Skills from "./skill-list/skills.jsx";
import AddInterests from "./skill-list/addInterests.jsx";

const App = () => {
    return (
        <Router>
            <div className="outer-container">

                    <div className="container">
                        <Routes>
                            <Route exact path="/" element={<MyProfile />} />
                            <Route path="/home" element={<Home />} />
                            <Route path="/search" element={<Search />} />
                            <Route path="/settings" element={<Settings />} />
                            <Route path="/message" element={<Message />} />
                            <Route path="/skills" element={<Skills />} />
                            <Route path="/addInterests" element={<AddInterests />} />


                         </Routes>
                    </div>

                <Footer/>
            </div>
        </Router>
    );
};

export default App;

