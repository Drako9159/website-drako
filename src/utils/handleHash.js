import bcrypt from "bcrypt";

// salt
async function getSalt(seg) {
  return await bcrypt.genSalt(seg);
}
// hash
async function getHash(password, salt) {
  return await bcrypt.hash(password, salt);
}
// decrypt hash
async function decryptHash(check, hash) {
  return await bcrypt.compare(check, hash);
}
export { getSalt, getHash, decryptHash };
