import React from 'react';
import './index.scss';

import { NavLink } from 'react-router-dom';
import { Category } from '../../../types';

interface IItem {
  item: Category;
  setCurrentPageId: (_id: string | null) => void;
}

const CategoriesItem: React.FC<IItem> = ({ item, setCurrentPageId }) => {
  const setCurrentNavigationItemId = (id: string) => {
    localStorage.setItem('navigationItemId', id);
  };

  const handleClick = () => {
    setCurrentPageId(item._id);
    setCurrentNavigationItemId(item._id);
  };

  return (
    <NavLink to={item.path} className="category" onClick={handleClick}>
      <img className="category-icon" src={item.icon} alt="icon" />
      <span className="category-name">{item.name}</span>
    </NavLink>
  );
};

export default CategoriesItem;
