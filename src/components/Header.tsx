import React from "react";
import Logo from '../assets/images/logo.png'

// interface Props {}

export default function Header() {
  return (
  <header id="header">
    <div className="container">
        <nav className="navbar navbar-expand-lg">
            <div className="container">

                {/* Logo */}
                <a className="logo" href="/#"><img src={Logo} alt="logo" /></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="icon-bar"><i className="icofont-navigation-menu"></i></span>
                </button>

                {/* navbar links */}
                <div className="collapse navbar-collapse" id="navbarContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link active" href="/#" data-scroll-nav="0">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#" data-scroll-nav="1">Features</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#" data-scroll-nav="2">ScreenShots</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#" data-scroll-nav="3">Pricing</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#" data-scroll-nav="4">Team</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#">Blog</a>
                        </li>
                        <li className="nav-item download-btn">
                            <a className="nav-link" href="/#" data-scroll-nav="5">Download</a>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
    </div>
  </header>);
}
