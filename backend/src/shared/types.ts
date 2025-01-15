export type UserType = {
    _id: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
};

export type EventType = {
    _id: string;
    name: string;
    date: Date;
    location: string;
    banner: string;
}
