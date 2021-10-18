import React, { Component, useState } from "react";
export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;

    return (
      <React.Fragment>
        <header id="home">
          <nav id="nav-wrap">
            <ul id="nav" className="nav">
              <li
              >
                <a href="#home">
                  Home
                </a>
              </li>
              <li>
                <a href="#resume">
                  Resume
                </a>
              </li>
              <li>
                <a href="#portfolio">
                  Works
                </a>
              </li>
              <li> 
                <a href="javascript: document.body.scrollIntoView(false);">
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          <div className="row banner">
            <div className="banner-text">
              <h1 className="responsive-headline">I am <br/>{resumeData.name}</h1>
              <h3 style={{ color: "#fff", fontFamily: "sans-serif " }}>
                a {resumeData.role}.<br/>{resumeData.roleDescription}
              </h3>
              <hr />
              <ul className="social">
                {resumeData.socialLinks &&
                  resumeData.socialLinks.map((item) => {
                    return (
                      <li key={item.name}>
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className={item.className} />
                        </a>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>

          <p className="scrolldown">
            <a className="smoothscroll" href="#resume">
              <i className="icon-down-circle" />
            </a>
          </p>
        </header>
      </React.Fragment>
    );
  }
}
