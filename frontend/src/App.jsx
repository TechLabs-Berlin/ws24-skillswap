import React from "react";
import Home from "./home/Home";
import Search from "./search/Search";
import MyProfile from "./myprofile/MyProfile";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from "./footer/Footer.jsx";
import Settings from "./setting/Settings.jsx";
import Message from "./message/message.jsx";

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

                         </Routes>
                    </div>

                <Footer/>
            </div>
        </Router>
    );
};

export default App;

