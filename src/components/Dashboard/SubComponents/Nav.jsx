import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FetchUser from '../FetchUser.jsx';

const Navigation = () => {
  const [activeItem, setActiveItem] = useState('interaktivitas');
  const [activeNav, setActiveNav] = useState('');
  const [namaToko, setNamaToko] = useState('');

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const result = await FetchUser(); // Assuming DB is your Firestore reference
        setNamaToko(result || 'Default NamaToko'); // Set a default value if result is falsy
      } catch (error) {
        // Handle errors here
      }
    };

    fetchDataAsync();
  }, []); 

  const navigationItems = [
    { id: 'interaktivitas', label: 'Interaktivitas' },
    { id: 'kejelasan', label: 'Kejelasan' },
    { id: 'keinformatifan-produk', label: 'Keinformatifan Produk' },
    { id: 'kualitas-Sistem', label: 'Kualitas Sistem' },
    { id: 'kebaruan', label: 'Kebaruan' },
    { id: 'nilai-Hedonis', label: 'Nilai Hedonis' },
    { id: 'kepuasan', label: 'Kepuasan' },
    { id: 'nilai-Keberlanjutan', label: 'Nilai Keberlanjutan' },
    { id: 'niat-Membeli', label: 'Niat Membeli' },
    { id: 'semua', label: 'Semua' },
  ];

  const handleItemClick = (itemId) => {
    // Set the activeItem state when a navigation item is clicked
    setActiveItem(itemId);
    setActiveNav('');
  };

  return (
    <div className='navigation'>
      <div className="menu-tab" onClick={() => setActiveNav('nav-active')}>
        <i className="bi bi-list"></i>
      </div>
      <nav className={`navbar ${activeNav}`}>
        <div className='profile'>
          <div className='log-out'>
            <Link to='/'><i class="bi bi-box-arrow-left"></i></Link>
          </div>

          <div className='user'>
            <i class="bi bi-person-circle"></i>
          </div>
          <h3>{namaToko}</h3>
        </div>

        <ul className="nav-list">
          {navigationItems.map((item) => (
            <li key={item.id} className={`nav-item ${item.id} ${activeItem === item.id ? 'active' : ''}`}>
              <a
                  href={`#${item.id}`}
                  className='nav-link'
                  onClick={() => handleItemClick(item.id)}
              >
                  <span>{item.label}</span>
              </a>
          </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;