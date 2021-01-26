import React from 'react';
import CategoriesMenuItem from '../CategoriesMenuItem';
import './index.scss';

import { ICategories } from '../../../interfaces/interfaces';

interface INavigation {
  categoriesList: ICategories[];
  value: number | null;
  onChange: (index: number | null) => void;
}

const CategoriesMenu: React.FC<INavigation> = ({ categoriesList, value, onChange }) => {

  return (
    <>
      <nav className="menu">
        <ul className="categoriesMenu">
          {categoriesList.map((item) => {
            return (
              <CategoriesMenuItem
                key={item.id}
                item={item}
                onHandleClick={onChange}
                active={item.id === value}
              />
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default CategoriesMenu;
