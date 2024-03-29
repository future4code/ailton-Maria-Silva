import * as jwt from "jsonwebtoken";

const expiresIn = "1min"

export const generateToken = (input: AuthenticationData): string => {
    const token = jwt.sign(
      {
        id: input.id,
        role: input.role
      },
      process.env.JWT_KEY as string,
      {
        expiresIn
      }
    );
    return token;
  }

  type AuthenticationData = {
    id: string;
    role: string
  }

export const getData = (token: string): AuthenticationData =>{
    const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
    const result = {
        id: payload.id,
        role: payload.role
    };
    return result
}

