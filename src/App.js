import './App.css';
import UseIdComponent from './components/useIdComponent';
import DefferedImp from './defferedImp';
import SearchList from './components/TransitionComponent';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import ResizableElement from './components/ResizeableElement';
import UseInsertionEffect from './components/insertionEffectComponent';

function App() {
  return (
    <div>
      <Router>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/useId">
                  useId hook
                </Link>
            </li>
            <li>
                <Link to="/deffered">
                  deffered hook
                </Link>
            </li>
            <li>
                <Link to="/transition">
                  transition hook
                </Link>
            </li>
            <li>
                <Link to="/ResizableElement">
                  ResizableElement hook
                </Link>
            </li>
            <li>
                <Link to="/UseInsertionEffect">
                  UseInsertionEffect hook
                </Link>
            </li>
        </ul>
        <Routes>
            <Route
                path="/"
                element={<div></div>}
            ></Route>
            <Route
                path="/useId"
                element={<UseIdComponent />}
            ></Route>
            <Route
                path="/deffered"
                element={<DefferedImp />}
            ></Route>
            <Route
                path="/transition"
                element={<SearchList />}
            ></Route>
            <Route
                path="/ResizableElement"
                element={<ResizableElement />}
            ></Route>
            <Route
                path="/UseInsertionEffect"
                element={<UseInsertionEffect />}
            ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
