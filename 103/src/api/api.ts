const Service = async function(src: string) : Promise<Array<unknown>> {
    const data = (await (await fetch(src)).json());
    return data;
}

export const clinics = Service("https://rs-wars-clone.herokuapp.com/doctors");
export const doctors = Service("https://rs-wars-clone.herokuapp.com/clinics");
export const articles = Service("https://rs-wars-clone.herokuapp.com/articles");
