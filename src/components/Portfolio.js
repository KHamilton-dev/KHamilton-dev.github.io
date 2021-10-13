import React, { Component } from "react";

export default class Porfolio extends Component {
  render() {
    return (
      <section id="portfolio">
        <h1>Check Out Some of My Works.</h1>
        <div className="portfolio-content">
          <div 
          className="col"
          >
            <h5>Periodic Tables (Live)</h5>
              <a
                href="https://khamilton-periodic-tables.herokuapp.com/dashboard"
                target="_blank"
                rel="noreferrer noopener"
              >
              <img src="images/PT.png" alt="Periodic Tables" />
              </a>
            <p>React app utilizing Express and PostgreSQL allowing management of reservations by restaurant management.</p>
          </div>
          <div
           className="col"
           >
            <h5>Flashcard-o-Matic</h5>
              <img src="images/FC.png" alt="Flashcards" />
              <p>React app utilizing a local database to allow creating of React fundamental study decks (external database integration and deployment in process).</p>
          </div>
        </div>
      </section>
    );
  }
}
