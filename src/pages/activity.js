import React from 'react';
import codingCamp2024 from '../images/codingcamp2024.png';
import exhibition2024 from '../images/exhibition.png';
import codingCamp2023 from '../images/codingcamp2023.png';

function Activity() {
  return (
    <main className="container my-5">
      <div className="jumbotron text-center">
        <h1>OUR ACTIVITY</h1>
      </div>

      <div className="activity-container d-flex flex-wrap justify-content-center">
        <div className="activity m-3 text-center">
          <a href="https://timedooracademy.com/blog/timedoor-academy-bootcamp-december-2023-awardee-announcement" target="_blank" rel="noopener noreferrer">
            <img alt="codingcamp2024" src={codingCamp2024} className="img-fluid" style={{ maxWidth: '300px' }} />
          </a>
          <h3 className="mt-3">Coding Camp June-July 2024</h3>
        </div>

        <div className="activity m-3 text-center">
          <a href="https://timedooracademy.com/blog/timedoor-academy-tech-festival-2024-finalists-announcement" target="_blank" rel="noopener noreferrer">
            <img alt="exhibition2024" src={exhibition2024} className="img-fluid" style={{ maxWidth: '300px' }} />
          </a>
          <h3 className="mt-3">Tech Festival June 2024</h3>
        </div>

        <div className="activity m-3 text-center">
          <a href="https://timedooracademy.com/blog/timedoor-academy-bootcamp-december-2023-awardee-announcement" target="_blank" rel="noopener noreferrer">
            <img alt="codingcamp2023" src={codingCamp2023} className="img-fluid" style={{ maxWidth: '300px' }} />
          </a>
          <h3 className="mt-3">Coding Camp December 2023</h3>
        </div>
      </div>
    </main>
  );
}

export default Activity;
