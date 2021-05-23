import React, { useEffect } from "react";
import Logo from "../assets/images/logo.png";
import Scroll from 'react-scroll'

interface HeaderProps {
	showArriboModal: Function ;
}

export default function Header( { showArriboModal }: HeaderProps ) {

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
            <a className="logo" href="/">
              <img src={Logo} alt="Arribo" />
            </a>

            {/* navbar links */}
            <div className="nvabar-links">
              <ul className="navbar-ul">
                <li className="nav-item">
                  <button className="nav-link active"  onClick={ () => scrollTo('home-area') }>
                    Home
                  </button>
                </li>
                <li className="nav-item">
                  <button className="nav-link"  onClick={ () => scrollTo('awesome-feat-area') } >
                    Features
                  </button>
                </li>
                <li className="nav-item">
                  <button className="nav-link"  onClick={ () => scrollTo('how-work-area') } >
                    How it works
                  </button>
                </li>
                <li className="nav-item">
                  <button className="nav-link"  onClick={ () => scrollTo('pricing-area') } >
                    Pricing
                  </button>
                </li>
                <li className="nav-item">
                  <button className="nav-link"  onClick={ () => scrollTo('team-area') } >
                    Team
                  </button>
                </li>
                <li className="nav-item download-btn ml-3">
                  <button className="nav-link" onClick={ () => showArriboModal() } >
                    Download
                  </button>
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
                <button className="nav-link" onClick={ () => { toggleMobileNav(); showArriboModal()} } >
                  Download
                </button>
              </li>
              <li className="nav-item">
                <button className="nav-link active" onClick={ () => ScrollToMobile('home-area') } >
                  Home
                </button>
              </li>
              <li className="nav-item">
                <button className="nav-link" onClick={ () => ScrollToMobile('awesome-feat-area') } >
                  Features
                </button>
              </li>
              <li className="nav-item">
                <button className="nav-link" onClick={ () => ScrollToMobile('how-work-area') } >
                  How it works
                </button>
              </li>
              <li className="nav-item">
                <button className="nav-link" onClick={ () => ScrollToMobile('pricing-area') } >
                  Pricing
                </button>
              </li>
              <li className="nav-item">
                <button className="nav-link" onClick={ () => ScrollToMobile('team-area') } >
                  Team
                </button>
              </li>
              
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
