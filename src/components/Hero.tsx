import React from "react";
import { gotoDownload } from '../Functions/Scroll'

export default function Header() {
  return (
    <section id="home-area" className="bg-1">
      <div className="container">
          <div className="row">

              <div className="col-lg-8">
                  <div className="caption d-table">
                      <div className="d-table-cell text-left">
                          <h1 className="text-white">Arribo is the best way to present your app to the world!</h1>
                          <h4 className="text-light font-open-sans">Arribo is the most unique mobile app, designed for managing startups, small business projects, and supporting modern companies.</h4>
                          
                          <div className="caption-btns">
                              <button className="bg" onClick={gotoDownload} >Download Now</button>
                          </div>

                          <div className="caption-download-btns">
                              <ul>
                                  <li><button onClick={gotoDownload} ><i className="icofont-brand-android-robot"></i></button></li>
                                  <li className="ml-1"><button onClick={gotoDownload} ><i className="icofont-brand-apple"></i></button></li>
                                  <li className="ml-1"><button onClick={gotoDownload} ><i className="icofont-brand-windows"></i></button></li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>

          </div>
      </div>
  </section>
  );
}
