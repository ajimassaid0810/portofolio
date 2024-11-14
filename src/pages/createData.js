import React, { useState } from 'react';
import supabase from '../supabaseClient';  // Pastikan Anda sudah mengonfigurasi supabaseClient

function CreateData() {
  // State untuk menyimpan nilai form
  const [title, setTitle] = useState('');
  const [level, setLevel] = useState('');
  const [name, setName] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [category, setCategory] = useState('');
  const [link, setLink] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  // Fungsi untuk mengirim data ke Supabase
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccessMessage('');

    try {
      // Mengirim data ke Supabase
      const { data, error } = await supabase
        .from('students_portofolio')  // Ganti dengan nama tabel Anda
        .insert([
          {
            title: title,
            level: level,
            name: name,
            image_url: imageUrl,
            category: category,
            link: link,
          },
        ]);

      if (error) {
        throw new Error(error.message);
      }

      // Menampilkan pesan sukses
      setSuccessMessage('Data has been successfully created!');
      
      // Reset form
      setTitle('');
      setLevel('');
      setName('');
      setImageUrl('');
      setCategory('');
      setLink('');
    } catch (error) {
      setError('Error: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Create Data</h1>
      {error && <div className="alert alert-danger">{error}</div>}
      {successMessage && <div className="alert alert-success">{successMessage}</div>}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input
            type="text"
            id="title"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="level" className="form-label">Level</label>
          <input
            type="text"
            id="level"
            className="form-control"
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            id="name"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="image_url" className="form-label">Image URL</label>
          <input
            type="url"
            id="image_url"
            className="form-control"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="category" className="form-label">Category</label>
          <select
            id="category"
            className="form-control"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="Coding Camp">Coding Camp</option>
            <option value="Junior">Junior</option>
            <option value="Kids">Kids</option>
            <option value="Teens">Teens</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="link" className="form-label">Link</label>
          <input
            type="url"
            id="link"
            className="form-control"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            required
          />
        </div>

        <div className="text-center">
          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateData;
