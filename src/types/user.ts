export interface User {
  id: string;
  imageUrl: string;
  name: string;
}

export interface Family {
  manager: User;
  members: User[];
}
