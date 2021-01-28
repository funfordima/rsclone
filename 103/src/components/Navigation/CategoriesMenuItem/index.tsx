import React from 'react';
import './index.scss';

import { ICategories } from '../../../interfaces/interfaces';

interface IItem {
  item: ICategories;
  onHandleClick: (id: string) => void;
  active: boolean;
}

const CategoriesMenuItem: React.FC<IItem> = ({
  item,
  onHandleClick,
  active,
}) => {
  const handleClick = () => {
    onHandleClick(item._id);
  };

  return (
    <li
      className={active ? 'navigation__item isActive' : 'navigation__item'}
      onClick={handleClick}
    >
      <img className="navigation__item-icon" src={item.icon} alt="icon" />
      <span className="navigation__itemem-name">{item.name}</span>
    </li>
  );
};

export default CategoriesMenuItem;
