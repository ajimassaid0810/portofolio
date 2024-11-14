import React from 'react';
import teacher1 from '../images/people/teacher1ori.jpg';
import teacher2 from '../images/people/teacher2.jpg';
import './css.css';

function AboutUs() {
  return (
    <main className="container my-5">
      <div className="jumbotron text-center">
        <h1>Teacher & Staff</h1>
      </div>

      <div className="about-container d-flex flex-wrap justify-content-center">
        <div className="people m-3 text-center">
          <img alt="Teacher 1" src={teacher1} className="img-fluid rounded" style={{ maxWidth: '200px' }} />
          {/* <h3>Teacher 1</h3> */}
        </div>
        
        <div className="people m-3 text-center">
          <img alt="Teacher 2" src={teacher2} className="img-fluid rounded" style={{ maxWidth: '200px' }} />
          {/* <h3>Teacher 2</h3> */}
        </div>
      </div>
    </main>
  );
}

export default AboutUs;
