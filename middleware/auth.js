
import  jwt  from "jsonwebtoken";

const config = process.env;

export const verifyToken = (req, res, next) => {
  const token =
    req.body.token || req.query.token ||req.cookies.access_token|| req.headers["x-access-token"];
  // console.log("tokennnnn",token);
  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    const decoded = jwt.verify(token, process.env.TOKEN_KEY)
    req.user = decoded;
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};
