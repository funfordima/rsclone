import React from 'react';
import './index.scss';

import { NavLink } from 'react-router-dom';
import { Category } from '../../../types';

interface IItem {
  item: Category;
  active: boolean;
  onHandleClick: (id: string) => void;
}

const CategoriesItem: React.FC<IItem> = ({
  item,
  active,
  onHandleClick,
}) => {
  const handleClick = () => {
    onHandleClick(item._id);
  };

  return (
    <NavLink
      to={item.path}
      className={active ? 'category isActive' : 'category'}
      onClick={handleClick}
    >
      <img className="category-icon" src={item.icon} alt="icon" />
      <span className="category-name">{item.name}</span>
    </NavLink>
  );
};

export default CategoriesItem;
