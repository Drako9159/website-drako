import jwt from "jsonwebtoken";
import { decryptHash } from "../utils/handleHash.js";
const JWT_SECRET = process.env.JWT_SECRET;
const USER_KEY = process.env.USER_KEY;
const PASSWORD_KEY = process.env.PASSWORD_KEY;
const ADMIN_KEY = process.env.ADMIN_KEY;
const ADMIN_PASSWORD= process.env.ADMIN_PASSWORD;

async function tokenSign(user, pass) {
  const checkPass = await decryptHash(pass, PASSWORD_KEY);
  const checkUser = await decryptHash(user, USER_KEY);
  if (!checkPass || !checkUser) return false;
  return getToken(user, pass);
}

async function tokenSignAdmin(user, pass) {
  const checkPass = await decryptHash(pass, ADMIN_PASSWORD);
  const checkUser = await decryptHash(user, ADMIN_KEY);
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

export { tokenSign, verifyToken, tokenSignAdmin };
