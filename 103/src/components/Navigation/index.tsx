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
  const [currentItem, setCurrentItem] = useState<string | null>(null);

  const handleClick = (id: string | null): void => {
    currentItem !== id ? setCurrentItem(id) : setCurrentItem(null);
  };

  return (
    <div className="navigation">
      <CategoriesMenu
        currentItem={currentItem}
        handleClick={handleClick}
        categoriesList={categoriesList}
      />
      <CategoriesSubMenu
        currentItem={currentItem}
        handleClick={handleClick}
        subCategoriesList={subCategoriesList}
      />
    </div>
  );
};

export default Navigation;
