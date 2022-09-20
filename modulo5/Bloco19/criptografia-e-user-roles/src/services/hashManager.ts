import * as bcrypt from "bcryptjs";

export const hashManager = async(senha: string): Promise<string> => {
    const rounds = Number(process.env.BCRYPT_COST);
    const salt = await bcrypt.genSalt(rounds);
    const result = await bcrypt.hash(senha, salt);
    return result;
  }

 const compare = async(senha: string, hash: string): Promise<boolean> => {
    return bcrypt.compare(senha, hash);
  }