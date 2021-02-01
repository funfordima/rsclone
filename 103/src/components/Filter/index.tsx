import React from 'react';
import './index.scss';

import FilterItem from './FilterItem';
import { ISubCategory } from '../../interfaces/interfaces';
import {
  Subcategory,
  SubcategoriesMenu,
  SubcategoriesItem,
} from '../../types/index';

interface ISubCategoriesList {
  subCategoriesList: Subcategory[];
  currentPageId: string | null;
}

const Filter: React.FC<ISubCategoriesList> = ({
  subCategoriesList,
  currentPageId,
}) => {
  let subCategoriesMenu: ISubCategory[] = [];

  subCategoriesList.forEach((subCategories: any) => {
    subCategories.categoriesId === currentPageId
      ? (subCategoriesMenu = subCategories.itemsMenu)
      : null;
  });

  return (
    <div className="categorySubMenu">
      <div className="categorySubMenu-row">
        {subCategoriesMenu.map((subCategory: any, index: number) => {
          return (
            <FilterItem
              key={index}
              icon={subCategory.icon}
              title={subCategory.title}
              subcategoriesItem={subCategory.items}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Filter;
