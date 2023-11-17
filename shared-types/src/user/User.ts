export interface User {
  id: number;
  email: string;
  createdAt: Date;
  firstName: string;
  lastName: string;
  password: string;
  description: string;
  region: string;
  companyId: number;
  role: Role
}

export enum Role {
  USER = "USER",
  ADMIN = "ADMIN",
}
