// src/App.jsx
import { BrowserRouter as Router } from "react-router-dom";
import AppRoute from "./appRoute.jsx";

function App() {
  return (
    <Router basename="/newPortfolio">
      <AppRoute />
    </Router>
  );
}

export default App;
