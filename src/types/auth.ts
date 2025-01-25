export interface LoginCredentials {
    email: string;
    password: string;
  }
  
  export interface RegisterData {
    username: string;
    email: string;
    password: string;
  }
  
  export interface User {
    _id: string;
    username: string;
    email: string;
    created_at: Date;
  }