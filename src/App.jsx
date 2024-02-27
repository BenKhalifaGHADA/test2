import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import logo from "/test.jpeg";
import "./App.css";
// const EventDetails = React.lazy(() => import("./components/EventDetails"));
import Test from "./Test";
import ComposantClass from "./ComponentClass";
import Button from "react-bootstrap/Button";

// import ComposantFonc from "./CompoFonc";
import RefExample from "./RefExample";
import Events from "./Components/Events";
import NotFound from "./Components/NotFound";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import NavigationBar from "./Components/Navbar";
import EventDetails from "./Components/EventDetails";
import EventAddForm from "./Components/EventAddForm";


function App() {
  //const [count, setCount] = useState(0);

  return (
    <>
      {/* <Test />

      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={logo} className="test" />
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <Button
          variant="primary"
          onClick={() => setCount((count) => count + 1)}
        >
         
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <ComposantClass />
      {/* <ComposantFonc /> */}
      {/* <RefExample />  */}

     
     {/* <Events /> */}
     {/* <React.Suspense fallback={<h1> Loading ...</h1>}> */}
     <NavigationBar />
     <Routes>
     <Route path="/events">
          <Route index element={<Events />} />
          <Route path=":id" element={<EventDetails />} />
          <Route path="add" element={<EventAddForm />} />
        </Route>
       <Route path="/home/:username" element={<Home />} />
       <Route path="/about" element={<About />} />
       <Route path="/contact" element={<Contact />} />
       
       <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
      {/* </React.Suspense> */}
    </>

  );
}

export default App;
