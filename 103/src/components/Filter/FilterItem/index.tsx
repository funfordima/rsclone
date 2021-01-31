import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';
import { ISubCategory } from '../../../interfaces/interfaces';
import { ISubcategoriesItem } from '../../../interfaces/interfaces';

const FilterItem: React.FC<ISubCategory> = ({
  icon,
  title,
  subcategoriesItem,
}) => {
  const subcategoriesItemWithoutTitle = subcategoriesItem.slice(1);

  const fillSubCategoriesColumn = (list: ISubcategoriesItem[]): any => {
    return list.map((item: ISubcategoriesItem, index: number) => {
      return (
        <li key={index} className="subCategory-item">
          <Link to={item.path}>
            <span>{item.name}</span>
          </Link>
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
              <Link to={subcategoriesItem[0].path}>
                <span>{subcategoriesItem[0].name}</span>
              </Link>
            </li>
          )}
        </span>
      </div>
      <ul>
        {title
          ? fillSubCategoriesColumn(subcategoriesItem)
          : fillSubCategoriesColumn(subcategoriesItemWithoutTitle)}
      </ul>
    </div>
  );
};

export default FilterItem;
