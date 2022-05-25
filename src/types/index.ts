export interface BodyContants {
    text: string
    link?:string
    sidebar:SideBar
}

export interface SideBar {
    text?: string
    name: string
    image?: string
    video?: string
    link?: string
    datetime?:string
    title?:string
    description?:string
}