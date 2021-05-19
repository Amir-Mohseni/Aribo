import React from "react";
// interface Props {}

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
                              <a className="bg" href="/#">Download Now</a>
                              {/* <a className="popup-video" href="https://www.youtube.com/watch?v=iaj8ktgL3BY&amp;t=5s"><i className="icofont-ui-play"></i> Play video</a> */}
                          </div>

                          <div className="caption-download-btns">
                              <ul>
                                  <li><a href="/#"><i className="icofont-brand-android-robot"></i></a></li>
                                  <li className="ml-1"><a href="/#"><i className="icofont-brand-apple"></i></a></li>
                                  <li className="ml-1"><a href="/#"><i className="icofont-brand-windows"></i></a></li>
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
