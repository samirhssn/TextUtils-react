import { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import NotFound from "./components/NotFound";
// import About from "./components/About";
import Alert from "./components/Alert";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); // whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#053B50";
      showAlert("Dark mode has been enabled!", "success");
      document.title = "TextUtils - Dark Mode";
      // setInterval(() => {
      //   document.title = "TextUtils - install now";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "TextUtils - try now free";
      // }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#EEEEEE";
      showAlert("Light mode has been enabled!", "success");
      document.title = "TextUtils - Light Mode";
    }
  };

  return (
    <>
      {/* <Router> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <Switch> */}
        {/* /about --> Component 1
          /about/product --> Component 2 */}
        {/* <Route exact path="/about"> */}
        {/* <About /> */}
        {/* </Route> */}
        {/* <Route exact path="/"> */}
        <TextForm
          heading="Enter the text to analyze below"
          mode={mode}
          showAlert={showAlert}
        />
        {/* </Route> */}
        {/* <Route path="/*"> */}
        {/* <NotFound /> */}
        {/* </Route> */}
        {/* </Switch> */}

        {/* <About /> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;

/* babel compiles jsx into proper javascript */
