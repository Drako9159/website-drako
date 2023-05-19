import handleError from "../utils/handleError.js";
import { tokenSign } from "../middlewares/handleJWT.js";
import { getHash, getSalt } from "../utils/handleHash.js";

async function loginController(req, res) {
  try {
    const { user, password } = req.body;
    if (!user || !password) {
      handleError(res, "NOT_PAYLOAD_DATA", 403);
      return;
    }

    if (!(await tokenSign(user, password))) {
      handleError(res, "PAYLOAD_UNAUTHORIZED", 403);
      return;
    }

    const token = await tokenSign(user, password);

    res
      .header("Acess-Control-Allow-Origin", "*")
      .header("Acess-Control-Allow-Credentials", true)
      .header("Content-Type", "application/json; charset=utf-8")
      .header("authorization", token)
      .send({ token: token });
  } catch (error) {
    handleError(res, "ERROR_LOGIN_USER", 403);
  }
}

async function criptController(req, res) {
  try {
    const { password } = req.body;
    if (!password) {
      handleError(res, "NOT_PAYLOAD_DATA", 403);
      return;
    }

    const salt = await getSalt(10);
    const hash = await getHash(password, salt);
    res.send({ hash: hash });
  } catch (error) {
    handleError(res, "ERROR_GENERATIN_CRIPT", 403);
  }
}


export { loginController, criptController };
