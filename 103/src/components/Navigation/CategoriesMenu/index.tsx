import React from 'react';
import CategoriesMenuItem from '../CategoriesMenuItem';
import './index.scss';

import { ICategories } from '../../../interfaces/interfaces';

interface INavigation {
  categoriesList: ICategories[];
  currentItem: string | null;
  handleClick: (id: string | null) => void;
}

const CategoriesMenu: React.FC<INavigation> = ({ categoriesList, currentItem, handleClick }) => {

  return (
    <>
      <nav className="menu">
        <ul className="categoriesMenu">
          {categoriesList.map((item) => {
            return (
              <CategoriesMenuItem
                key={item._id}
                item={item}
                onHandleClick={handleClick}
                active={item._id === currentItem}
              />
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default CategoriesMenu;
