import { habyApi } from "../../config/api/habyApi";
import { User } from "../../domain/entities/user";
import { AuthResponse } from "../../interfaces/auth.responses";


const returnUserToken = (data: AuthResponse) => {
  const user: User = {
    idUser: data.data.idUser,
    name: data.data.name,
    email: data.data.email,
    typeUser:  data.data.typeUser,
    coins: data.data.coins
  };

  return {
    user,
    token: data.token,
  };
};

export const authRegister = async (name: string, email: string, password: string) => {
  email = email.toLowerCase();

  try {
    const { data } = await habyApi.post<AuthResponse>('/registro_usuario', {
      name,
      email,
      password,
    });

    return returnUserToken(data);
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const authLogin = async (email: string, password: string) => {
  email = email.toLowerCase();

  try {
    const { data } = await habyApi.post<AuthResponse>('/login_usuario', {
      email,
      password,
    });

    return returnUserToken(data);
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const authCheckStatus = async () => {
  try {
    const { data } = await habyApi.get<AuthResponse>('/registro_usuario');
    return returnUserToken(data);
  } catch (error) {
    console.log({ error });
    return null;
  }
};
