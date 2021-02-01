import React from 'react';
import './index.scss';

import FilterItem from './FilterItem';
import { Subcategory, SubcategoriesMenu } from '../../types';

interface IFilter {
  filterList: Subcategory[];
  currentPageId: string | null;
}

const Filter: React.FC<IFilter> = ({ filterList, currentPageId }) => {
  const filterItem =
    filterList.find(
      (subCategories: Subcategory) =>
        subCategories.categoriesId === currentPageId,
    ) || null;

  const categoriesFilterItem: SubcategoriesMenu[] | null = filterItem
    ? filterItem.itemsMenu
    : null;

  return (
    <div className="categorySubMenu">
      <div className="categorySubMenu-row">
        {categoriesFilterItem
          ? categoriesFilterItem.map(
              (subCategory: SubcategoriesMenu, index) => {
                return (
                  <FilterItem
                    key={index}
                    icon={subCategory.icon}
                    title={subCategory.title}
                    items={subCategory.items}
                  />
                );
              },
            )
          : null}
      </div>
    </div>
  );
};

export default Filter;
