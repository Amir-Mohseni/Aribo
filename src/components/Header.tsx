import React, { useEffect } from "react";
import Logo from "../assets/images/logo.png";
import Scroll from 'react-scroll'

// interface Props {}

export default function Header() {

  useEffect(() => {
    const header = document.querySelector("header#header");

    window.addEventListener("scroll", (e) => {
      if (window.scrollY > 200) {
        if (!header?.classList.contains("sticky"))
          header?.classList.add("sticky");
      } else {
        if (header?.classList.contains("sticky"))
          header?.classList.remove("sticky");
      }
    });
  }, []);

  const toggleMobileNav = (): void => {

    const mobileNav = document.querySelector('.mobile-nav')

    if( mobileNav?.classList.contains('d-none') ) mobileNav.classList.remove('d-none')

    if( mobileNav?.classList.contains('hideMobileNav') ){

        mobileNav?.classList.remove('hideMobileNav')
        mobileNav?.classList.add('showMobileNav')

    } else if ( mobileNav?.classList.contains('showMobileNav') ){

        mobileNav?.classList.remove('showMobileNav')
        mobileNav?.classList.add('hideMobileNav')

    }

  }

  const scrollTo = ( elId: string ) => {

      const target = document.getElementById(elId)

      Scroll.animateScroll.scrollTo( target?.offsetTop || 0 )
  }

  const ScrollToMobile = ( elId : string ) => {

    toggleMobileNav()
    setTimeout( () => {
        scrollTo(elId)
    },300)
  }

  return (
    <header id="header">
      <div className="container">
        <nav className="navbar">
          <div className="container">
            {/* Logo */}
            <a className="logo" href="/#">
              <img src={Logo} alt="logo" />
            </a>

            {/* navbar links */}
            <div className="nvabar-links">
              <ul className="navbar-ul">
                <li className="nav-item">
                  <a className="nav-link active" href="/#" onClick={ () => scrollTo('home-area') }>
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/#" onClick={ () => scrollTo('awesome-feat-area') } >
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/#" onClick={ () => scrollTo('how-work-area') } >
                    How it works
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/#" onClick={ () => scrollTo('pricing-area') } >
                    Pricing
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/#" onClick={ () => scrollTo('team-area') } >
                    Team
                  </a>
                </li>
                <li className="nav-item download-btn ml-3">
                  <a className="nav-link" href="/#" >
                    Download
                  </a>
                </li>
              </ul>
            </div>
          
            <button className="navbar-toggler" type="button" onClick={toggleMobileNav}>
              <span className="icon-bar">
                <i className="icofont-navigation-menu"></i>
              </span>
            </button>

          </div>

          {/* Mobile Navbar */}
          <div className="mobile-nav d-none hideMobileNav">
            <ul className="navbar-ul ">

              <li className="nav-item download-btn ml-3">
                <a className="nav-link" href="/#" >
                  Download
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/#" onClick={ () => ScrollToMobile('home-area') } >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#" onClick={ () => ScrollToMobile('awesome-feat-area') } >
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#" onClick={ () => ScrollToMobile('how-work-area') } >
                  How it works
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#" onClick={ () => ScrollToMobile('pricing-area') } >
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#" onClick={ () => ScrollToMobile('team-area') } >
                  Team
                </a>
              </li>
              
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
