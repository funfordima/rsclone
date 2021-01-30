import React from 'react';
import './index.scss';

import CategoriesItem from './CategoriesItem';
import { Category } from '../../types';

interface INavigation {
  categoriesList: Category[];
  setCurrentPageId: (_id: string | null) => void;
}

const Navigation: React.FC<INavigation> = ({
  categoriesList,
  setCurrentPageId,
}) => (
  <div className="navigation">
    <nav className="menu">
      <div className="categories-menu">
        {categoriesList.map(item => {
          return (
            <CategoriesItem
              key={item._id}
              item={item}
              setCurrentPageId={setCurrentPageId}
            />
          );
        })}
      </div>
    </nav>
  </div>
);

export default Navigation;
