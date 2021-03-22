import * as bcrypt from "bcrypt"

export async function getHashWithSalt(password:string):Promise<string>{
    const salt = await bcrypt.genSalt();
    return bcrypt.hash(password, salt);
}