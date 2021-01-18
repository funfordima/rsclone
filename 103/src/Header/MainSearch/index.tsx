import React from 'react';
import './MainSearch.scss';

const MainSearch: React.FC = () => {
  return (
    <div className="main-search__wrapper">
      <div className="main-search__container">
        <div className="main-search">
          <form>
            <div className="main-search__placeholder">
              <span className="main-search_icon">
                <svg
                  viewBox="0 0 24 24"
                  id="icon-search"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20 18.6l-3.8-4c1-1.2 1.5-2.6 1.5-4.2 0-3.6-2.9-6.5-6.5-6.5s-6.5 2.9-6.5 6.5 2.9 6.5 6.5 6.5c1.3 0 2.6-.4 3.7-1.2l3.8 4c.2.2.4.3.6.3s.4-.1.6-.2c.4-.4.4-.9.1-1.2zM11.2 5.7c2.6 0 4.8 2.1 4.8 4.8s-2.1 4.8-4.8 4.8-4.8-2.1-4.8-4.8 2.2-4.8 4.8-4.8z" />
                </svg>
              </span>
              <span className="main-search_placeholder-text">Find help</span>
            </div>
            <div className="main-search__input_wrapper">
              <input type="text" className="main-search__input" />
            </div>
          </form>
        </div>
        <div className="main-search_overlay" />
      </div>
    </div>
  );
};

export default MainSearch;
