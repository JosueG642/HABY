export interface AuthResponse {
  data:  Data;
  token: string;
}

export interface Data {
  idUser:    number;
  name:      string;
  email:     string;
  password:  string;
  typeUser:  string;
  createdAt: Date;
  updatedAt: Date;
  coins: number;
}

export interface TodoResponse{
  
}