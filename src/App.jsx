import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [backendData, setBackendData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/test')
      .then((response) => {
        setBackendData(response.data);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setError("Could not connect to the backend API.");
      });
  }, []);

  return (
    <>
      <h2>Welcome to PulseVote</h2>
      
      <div className="card" style={{ marginTop: '20px', padding: '15px', border: '1px solid #ccc' }}>
        <h3>Backend Integration Status:</h3>
        
        {error && <p style={{ color: 'red' }}>{error}</p>}

        {backendData ? (
          <div>
            <p><strong>Message:</strong> {backendData.message}</p>
            <p><strong>Status:</strong> {backendData.status}</p>
          </div>
        ) : (
          !error && <p>Loading data from backend...</p>
        )}
      </div>
    </>
  );
}

export default App;