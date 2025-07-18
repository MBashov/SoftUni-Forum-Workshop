export interface User {
    "themes": string[],
    "posts": string[],
    "_id": string,
    "tel": string,
    "email": string,
    "username": string,
    "password": string,
    "created_at": string,
    "updatedAt": string,
    "__v": 0
}

export interface UserForAut {
    firstName: string, 
    email: string,
    phoneNumber: string,
    password: string,
    id: string,
}