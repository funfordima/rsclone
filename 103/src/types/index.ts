export type ClinicType = {
    _id: string,
    section: string,
    subsection: string,
    title: string,
    country: string,
    city: string,
    address: string,
    workingHours: string | null,
    tel: string | null,
    description: string | null,
    pictures: Array<string> | null,
    personnelID: Array<string> | null,
    coordinates: Array<number>,
    complete: boolean
}

export type DoctorType = {
    _id: string,
    name: string,
    country: string,
    city: string,
    section: string,
    profession: string,
    experience: string | null,
    category: string | null,
    education: string | null,
    placeWork: string | null,
    idWork: string | null,
    tel: string | null,
    pictures: Array<string> | null,
    complete: boolean
}

export type ArticleType = {
    _id: string,
    title: string,
    subtitle: string | null,
    text: string,
    countView: number,
    src: string | null,
    complete: boolean
}

export type Category = {
    _id: string,
    name: string,
    icon: string,
    path: string,
}

export type Subcategory = {
    _id: string,
    itemsMenu: Array<SubcategoriesMenu>,
    categoriesId: string
}

export type SubcategoriesMenu = {
    _id: string,
    icon: string,
    title: string | null,
    items: Array<SubcategoriesItem>
}

export type SubcategoriesItem = {
    _id: string,
    name: string,
    path: string,
    complete: boolean
}

export type Comment = {
    _id: string,
    idArticle: string,
    userName: string,
    message: string,
    complete: boolean
}
