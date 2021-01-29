import React from 'react';
import './index.scss';

import CategoriesItem from './CategoriesItem';
import { Category } from '../../types';

interface INavigation {
  categoriesList: Category[];
}

const Navigation: React.FC<INavigation> = ({ categoriesList }) => (
  <div className="navigation">
    <nav className="menu">
      <div className="categories-menu">
        {categoriesList.map(item => {
          return <CategoriesItem key={item._id} item={item} />;
        })}
      </div>
    </nav>
  </div>
);

export default Navigation;
