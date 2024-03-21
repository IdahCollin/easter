// Import the 'Route' component from the 'react-router-dom' library.
import { Route } from "react-router-dom";
// Import various page components used as route elements.
import { Home } from "../pages/Home";
import { About } from "../pages/About";

const routes = (
    <>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
    </>
)

export default routes;
