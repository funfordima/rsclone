export type ClinicType = {
    _id: string,
    section: string,
    title: string,
    country: string,
    city: string,
    address: string,
    workingHours: string | null,
    tel: string | null,
    description: string | null,
    picters: Array<string> | null,
    personnelID: Array<string> | null,
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
    picters: Array<string> | null,
    complete: boolean
}

export type ArticleType = {
    _id: string,
    title: string,
    subtitle: string | null,
    text: string,
    src: string | null,
    complete: boolean
}
