export interface ICategories {
  _id: string,
  icon: string,
  name: string,
  subcategories?: ISubCategory[],
}

export interface ISubCategory {
  icon: string,
  title?: string,
  subcategoriesItem: ISubcategoriesItem[],
}

export interface ISubcategoriesItem {
  name: string,
  path: string,
  complete: boolean,
}