import React, { useState } from 'react';
import CategoriesMenu from './CategoriesMenu';
import CategoriesSubMenu from './CategoriesSubMenu';

import { ICategories } from '../../interfaces/interfaces';

interface INavigation {
  categoriesList: ICategories[];
  subCategoriesList: any;
}

const Navigation: React.FC<INavigation> = ({
  categoriesList,
  subCategoriesList,
}) => {
  const [currentItem, setCurrentItem] = useState<number | null>(null);

  const handleClick = (id: number | null): void => {
    currentItem !== id ? setCurrentItem(id) : setCurrentItem(null);
  };

  return (
    <div className="navigation">
      <CategoriesMenu
        value={currentItem}
        onChange={handleClick}
        categoriesList={categoriesList}
      />
      <CategoriesSubMenu
        value={currentItem}
        onChange={handleClick}
        subCategoriesList={subCategoriesList}
      />
    </div>
  );
};

export default Navigation;
