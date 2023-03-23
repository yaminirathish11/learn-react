import "./App.css";
import { useState, createContext } from "react";
import Component1 from "./components/component1";

const NameContext = createContext();

function App() {
  const [name, setName] = useState("RatYam");
  return (
    <div className="App">
      <NameContext.Provider value={name}>
        <h1>Hello world app</h1>
        <Component1 />
      </NameContext.Provider>
    </div>
  );
}

export {App, NameContext};

// Init - const variableName = createContext();
// Value Provide - 
{/* <variableName.Provider value={name}>
<h1>Hello world app</h1>
<Component1 />
</variableName.Provider> */}

//useContext - to extract the value
