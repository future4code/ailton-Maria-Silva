import * as from "jsonwebtoken";

const expiresIn = "1min"

export const generateToken(input: AuthenticationData): string {
    const token = jwt.sign(
      {
        id: input.id,
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
  }