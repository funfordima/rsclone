import React, { ReactNodeArray } from 'react';
import './index.scss';
import { Link } from 'react-router-dom';

import { SubcategoriesItem } from '../../../types';

interface SubcategoriesMenu {
  _id?: string | undefined;
  icon: string;
  title: string | null;
  items: Array<SubcategoriesItem>;
  onclick: (str:string) => void;
}

const FilterItem: React.FC<SubcategoriesMenu> = ({ icon, title, items, onclick }) => {
  const categoriesFilterItemWithoutTitle = items.slice(1);
  const fillSubCategoriesColumn = (
    list: SubcategoriesItem[],
  ): ReactNodeArray => {
    return list.map((item: SubcategoriesItem, index: number) => {
      const handleClick = () => {
        onclick(item.name);
      }
      return (
        <li key={index} className="subCategory-item">
          <span onClick={ handleClick }>
            <span>{item.name}</span>
          </span>
        </li>
      );
    });
  };

  return (
    <div className="subcategories-item-column">
      <div className="subcategories-item-top">
        <img src={icon} alt="icon" className="subcategories-item-icon" />
        <span
          className={
            title
              ? 'subcategories-item-title'
              : 'subcategories-item-title item-like-a-link'
          }
        >
          {title || (
            <li className="subCategory-item item-like-a-link">
              <Link to={items[0].path}>
                <span>{items[0].name}</span>
              </Link>
            </li>
          )}
        </span>
      </div>
      <ul>
        {title
          ? fillSubCategoriesColumn(items)
          : fillSubCategoriesColumn(categoriesFilterItemWithoutTitle)}
      </ul>
    </div>
  );
};

export default FilterItem;
