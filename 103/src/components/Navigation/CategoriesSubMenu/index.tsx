import React from 'react';
import './index.scss';

import CategoriesSubMenuItem from '../CategoriesSubMenuItem';
import { ISubCategory } from '../../../interfaces/interfaces';

interface ISubCategoriesList {
  subCategoriesList: any;
  currentItem: string | null;
  handleClick: (id: string | null) => void;
}

const CategoriesSubMenu: React.FC<ISubCategoriesList> = ({
  subCategoriesList,
  currentItem,
  handleClick,
}) => {
  let subCategoriesMenu: ISubCategory[] = [];

  subCategoriesList.forEach((subCategories: any) => {
    subCategories.categoriesListId === currentItem
      ? (subCategoriesMenu = subCategories.subCategoriesMenu)
      : null;
  });

  const onHandleClick = (event: any): void => {
    event.preventDefault();
    handleClick(null);
  };

  return (
    <div
      className={currentItem === null ? 'categorySubMenu' : 'categorySubMenu active'}
    >
      <button
        className="categoriesSubMenu-button-close"
        onClick={onHandleClick}
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
