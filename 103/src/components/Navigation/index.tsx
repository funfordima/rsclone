import React, { useState } from 'react';
import './index.scss';

import CategoriesItem from './CategoriesItem';
import { Category } from '../../types';

interface INavigation {
  categoriesList: Category[];
}

const Navigation: React.FC<INavigation> = ({ categoriesList }) => {
  const [currentItem, setCurrentItem] = useState<string | null>(null);

  const handleClick = (id: string | null): void => {
    currentItem !== id ? setCurrentItem(id) : setCurrentItem(null);
  };

  return (
    <div className="navigation">
      <nav className="menu">
        <div className="categories-menu">
          {categoriesList.map((item) => {
            return (
              <CategoriesItem
                key={item._id}
                item={item}
                active={item._id === currentItem}
                onHandleClick={handleClick}
              />
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
