import "./App.css";

import Navbar from "./Components/Navbar/Navbar";
import Main1 from "./Components/Main1/Main1";
import Main2 from "./Components/Main2/Main2";
import Main3 from "./Components/Main3/Main3";
import Main4 from "./Components/Main4/Main4";
import Main5 from "./Components/Main5/Main5";
<link href="/dist/output.css" rel="stylesheet"></link>;
function App() {
  return (
    <div className="grid">
      <Navbar />
      <Main1 />
      <Main2 />
      <Main3 />
      <Main4 />
      <Main5 />
    </div>
  );
}

export default App;
