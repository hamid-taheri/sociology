import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Notfound from "./pages/notfound/Notfound";
import Emtiazdehi from "./pages/emtiazdehi/Emtiazdehi";
import Themedehi from "./pages/themedehi/Themedehi";

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/themedehi" element={<Themedehi/>}/>
        <Route path="/emtiazdehi" element={<Emtiazdehi/>}/>
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </div>
  );
}

export default App;
