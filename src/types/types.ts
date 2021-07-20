export type UserPostsType = {
    id: number
    message: string
    likesCount: number
}
export type UserContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
export type UserPhotosType = {
    small: string | null
    large: string | null
}
export type ProfileType = {
    userId: number | undefined
    lookingForAJob: boolean | undefined
    lookingForAJobDescription: string | undefined
    fullName: string | undefined
    contacts: UserContactsType | undefined
    photos: UserPhotosType | undefined
}
export type UserType = {
    id: number
    name: string
    status: string
    photos: UserPhotosType
    followed: boolean
}