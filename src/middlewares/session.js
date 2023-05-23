import { verifyToken } from "./handleJWT.js";
import handleError from "../utils/handleError.js";

export default async function authMiddleware(req, res, next) {
  try {
    if (!req.headers.authorization) {
      handleError(res, "NOT_TOKEN_PROVIDER", 403);
      return;
    }

    const token = req.headers.authorization.split(" ").pop();

    const dataToken = verifyToken(token);
    if (!dataToken) {
      handleError(res, "TOKEN_EXPIRED", 401);
      return;
    }
    const query = {
      id: dataToken.id,
    };
    next();
  } catch (error) {
    handleError(res, "NOT_SESSION", 403);
  }
}
