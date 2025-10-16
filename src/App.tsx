import { Link, Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import Nav from "./layout/Nav";
import AboutMe from "./pages/AboutMe";
import { Projects } from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route index element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
      <Route path="/about" element={<AboutMe />} />
      <Route
        path="*"
        element={
          <div>
            404 - page not found
            <p>
              Go back to{" "}
              <Link to="/" className="text-blue-600 underline">
                Home
              </Link>
            </p>
          </div>
        }
      />
    </Routes>
  );
}

export default App;
