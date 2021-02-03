import { ClinicType, DoctorType, ArticleType, Category, Subcategory, Comment, LinkService, LinkSlider } from "../types";

const Service = async function<T>(src: string) : Promise<Array<T>> {
    const data = (await (await fetch(src)).json());
    return data;
}

export const doctors = Service<DoctorType>("https://rs-wars-clone.herokuapp.com/doctors");
export const clinics = Service<ClinicType>("https://rs-wars-clone.herokuapp.com/clinics");
export const articles = Service<ArticleType>("https://rs-wars-clone.herokuapp.com/articles");
export const category = Service<Category>("https://rs-wars-clone.herokuapp.com/category");
export const subcategory = Service<Subcategory>("https://rs-wars-clone.herokuapp.com/subcategory");
export const comments= Service<Comment>("https://rs-wars-clone.herokuapp.com/comments");
export const linkservice= Service<LinkService>("https://rs-wars-clone.herokuapp.com/linkservice");
export const linkslider= Service<LinkSlider>("https://rs-wars-clone.herokuapp.com/linkslider");