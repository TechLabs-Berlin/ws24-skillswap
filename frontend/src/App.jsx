import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import './components/atoms/Colors.css';
import { Login } from './form/login/Login';
import { Register } from './form/registration/Register';
import SplashScreen from './components/SplashScreen';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (e.g., fetch initial data)
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the time as needed
  }, []);

  if (loading) {
    return <SplashScreen />;
  }

  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        {/* Other routes */}
      </Switch>
    </Router>
  );
}

export default App;


// import { useState } from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import './App.css';
// import './components/atoms/Colors.css';
// import { Login } from './form/login/Login';
// import { Register } from './form/registration/Register';

// function App() {
//   const [currentForm, setCurrentForm] = useState('login');

//   const toggleForm = (formName) => {
//     setCurrentForm(formName);
//   }

//   return (
//     <Router>
//       <Switch>
//         <Route path="/login" component={Login} />
//         <Route path="/onboarding" component={Onboarding} />
//         {/* Other routes */}
//       </Switch>
//     </Router>
//   )
// }

// export default App
