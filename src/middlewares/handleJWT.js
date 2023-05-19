import jwt from "jsonwebtoken";
import { decryptHash } from "../utils/handleHash.js";
const JWT_SECRET = process.env.JWT_SECRET;
const USER_KEY = process.env.USER_KEY;
const PASSWORD_KEY = process.env.PASSWORD_KEY;

async function tokenSign(user, pass) {
  const checkPass = await decryptHash(pass, PASSWORD_KEY);
  const checkUser = await decryptHash(user, USER_KEY);
  console.log(checkPass, checkUser);
  if (!checkPass || !checkUser) return false;
  return getToken(user, pass);
}

function getToken(user, pass) {
  const sign = jwt.sign(
    {
      user: user,
      pass: pass,
    },
    JWT_SECRET,
    {
      expiresIn: "2h",
    }
  );
  return sign;
}

function verifyToken(tokenJwt) {
  try {
    return jwt.verify(tokenJwt, JWT_SECRET);
  } catch (error) {
    return null;
  }
}

export { tokenSign, verifyToken };
