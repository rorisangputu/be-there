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
  description: string;
  dateTime: Date; // Combined date and time
  location: string;
  bannerPhoto: string;
  userId: string;
}

export type RsvpType = {
  _id: string;
  guestName: string;
  guestEmail: string;
  userId: string
}
