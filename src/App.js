import Home from "./pages/Home";
import {BrowserRouter, Link, Route, Routes, useParams} from "react-router-dom";
import React from "react";


const Error = () => (<span>ERROR</span>)
const About = () => (<div>About
    <Link to="/">
        Retour
    </Link>
</div>)


const House = () => {
    const {id} = useParams()

    return (
        <div>
            House {id}
        </div>
    )
}

function App() {
    return (
        <div className='App'>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="/house/:id" element={<House />} />
                    <Route path="/error" element={<Error />} />
                    <Route path="/about" element={<About />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
