import React from 'react';
import './index.scss';

import CategoriesSubMenuItem from '../CategoriesSubMenuItem';
import { ISubCategory } from '../../../interfaces/interfaces';

interface ISubCategoriesList {
  subCategoriesList: any;
  value: number | null;
  onChange: (index: number | null) => void;
}

const CategoriesSubMenu: React.FC<ISubCategoriesList> = ({
  subCategoriesList,
  value,
  onChange,
}) => {
  let subCategoriesMenu: ISubCategory[] = [];

  subCategoriesList.forEach((subCategories: any) => {
    subCategories.categoriesListId === value
      ? (subCategoriesMenu = subCategories.subCategoriesMenu)
      : null;
  });

  const handleClick = (event: any): void => {
    event.preventDefault();
    onChange(null);
  };

  return (
    <div
      className={value === null ? 'categorySubMenu' : 'categorySubMenu active'}
    >
      <button
        className="categoriesSubMenu-button-close"
        onClick={handleClick}
      ></button>
      <div className="categorySubMenu-row">
        {
          subCategoriesMenu.map(
            (subCategory: ISubCategory, index: number) => {
              return (
                <CategoriesSubMenuItem
                  key={index}
                  icon={subCategory.icon}
                  title={subCategory.title}
                  subcategoriesItem={subCategory.subcategoriesItem}
                />
              );
            },
          )
        }
      </div>
    </div>
  );
};

export default CategoriesSubMenu;
