import React, { useState } from 'react';
import './index.css';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const [show, setShow] = useState(false);
  const location = useLocation();

  return (
    <main className={show ? 'space-toggle' : null}>
      <header className={`header ${show ? 'space-toggle' : null}`}>
        <div className='header-toggle' onClick={() => setShow(!show)}>
          <i className={`fas fa-bars ${show ? 'fa-solid fa-xmark' : null}`}></i>
        </div>
      </header> 

      <aside className={`sidebar ${show ? 'show' : null}`}>
        <nav className='nav'>
           <div>
             <Link to='/' className='nav-logo'>
               <i className={`fas fa-home-alt nav-logo-icon`}></i>
               <span className='nav-logo-name'>Homepage</span>
             </Link>

             <div className='nav-list'>
               <Link to='/calendar' className={`nav-link ${location.pathname === '/calendar' ? 'active' : ''}`}>
                 <i class="fa-regular fa-calendar-days"></i>
                 <span className='nav-link-name'>Calendar</span>
               </Link>
               <Link to='/media' className={`nav-link ${location.pathname === '/media' ? 'active' : ''}`}>
                 <i className='fas fa-image nav-link-icon'></i>
                 <span className='nav-link-name'>Media</span>
               </Link>
               <Link to='/emotions' className={`nav-link ${location.pathname === '/emotions' ? 'active' : ''}`}>
                 <i class="fa-solid fa-face-smile"></i>
                 <span className='nav-link-name'>Emotions</span>
               </Link>
             </div>
           </div>

        </nav>
      </aside>
    </main>
  );
};

export default Sidebar;