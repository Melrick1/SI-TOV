import { useState } from 'react';

const Navigation = () => {
  const [activeItem, setActiveItem] = useState('interaktivitas');
  const [activeNav, setActiveNav] = useState('');

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
  ];

  const handleItemClick = (itemId) => {
    // Set the activeItem state when a navigation item is clicked
    setActiveItem(itemId);
    setActiveNav('');
  };

  return (
    <div>
      <div className="menu-tab" onClick={() => setActiveNav('nav-active')}>
        <i className="bi bi-list"></i>
      </div>
      <nav className={`navbar ${activeNav}`}>
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