import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Courses";
import Achievements from "./pages/Achievements";
import Forum from "./pages/Forum";
import ErrorPage from "./pages/ErrorPage";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/courses" component={Courses} />
        <Route exact path="/achievements" component={Achievements} />
        <Route exact path="/forum" component={Forum} />
        <Route exact path="*" component={ErrorPage} />
      </Switch>
    </Router>
  );
};

export default App;
