import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

function Dashboard() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="dashboard">
      <h1>AI Coral Conservancy</h1>
      <h2>Monitoramento e Conservação de Recifes de Coral</h2>
      <div className="btn" onClick={toggleMenu}>
        Menu
      </div>
      {menuOpen && (
        <nav className="dropdown-menu">
          <ul>
            <li>
              <Link to="/environmental-detection">Degradação Ambiental</Link>
            </li>
            <li>
              <Link to="/species-identification">Identificação de Coral</Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}

export default Dashboard;