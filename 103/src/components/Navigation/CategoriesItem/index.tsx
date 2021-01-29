import React from 'react';
import './index.scss';

import { NavLink } from 'react-router-dom';
import { Category } from '../../../types';

interface IItem {
  item: Category;
}

const CategoriesItem: React.FC<IItem> = ({ item }) => (
  <NavLink to={item.path} className="category">
    <img className="category-icon" src={item.icon} alt="icon" />
    <span className="category-name">{item.name}</span>
  </NavLink>
);

export default CategoriesItem;
