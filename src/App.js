import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Login from "./components/Login";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          {/* Add more routes here */}
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
