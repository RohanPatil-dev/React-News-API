import React from "react"
import News from "./News"


export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home </a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="#">About </a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Contact </a>
                        </li>
                    </ul>
                </div>
            </nav>

            <News heading={"NewsMonkey - Top Headline"}/>

            
        </>
    )
}