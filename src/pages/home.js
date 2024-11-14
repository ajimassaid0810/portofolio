import React, { useState, useEffect } from 'react';
import supabase from '../supabaseClient';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fungsi untuk mengambil data portfolio
  const fetchAndDisplayStudents = async (category = 'all') => {
    setLoading(true);

    try {
      const { data, error } = await supabase
        .from('students_portofolio')
        .select('*');

      if (error) {
        throw new Error(error.message);
      }

      let filtered = data;
      if (category !== 'all') {
        filtered = data.filter(student => student.category === category);
      }

      setStudents(data);
      setFilteredStudents(filtered);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  // Fungsi untuk menangani filter kategori
  const filterCategory = (category) => {
    fetchAndDisplayStudents(category);
  };

  useEffect(() => {
    fetchAndDisplayStudents();
  }, []);

  return (
    <div>
      {/* Navbar */}
      

      {/* Header */}
      <header className="text-center py-4">
        <h1>Student Portfolio</h1>
      </header>

      {/* Category Filter Navigation */}
      <nav id="categories" className="text-center mb-4">
        <button className="btn btn-outline-primary mx-1" onClick={() => filterCategory('all')}>All</button>
        <button className="btn btn-outline-primary mx-1" onClick={() => filterCategory('Coding Camp')}>Coding Camp</button>
        <button className="btn btn-outline-primary mx-1" onClick={() => filterCategory('Junior')}>Junior</button>
        <button className="btn btn-outline-primary mx-1" onClick={() => filterCategory('Kids')}>Kids</button>
        <button className="btn btn-outline-primary mx-1" onClick={() => filterCategory('Teens')}>Teens</button>
      </nav>

      {/* Loading Spinner */}
      {loading && (
        <div className="text-center my-4">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}

      {/* Portfolio Section */}
      <section id="portfolio" className="container d-flex flex-wrap justify-content-center">
        {!loading && filteredStudents.length === 0 && (
          <p className="text-center text-danger">No students found for this category.</p>
        )}

        {filteredStudents.map((student, index) => (
          <div key={index} className="card m-2" style={{ width: '18rem' }}>
            <img src={student.image_url} className="card-img-top" alt={student.title} />
            <div className="card-body">
              <h5 className="card-title">{student.title}</h5>
              <p className="card-text">Level: {student.level}</p>
              <p className="card-text">Name: {student.name}</p>
            </div>
          </div>
        ))}
      </section>

    </div>
  );
}

export default Home;
