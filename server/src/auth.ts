import { Request, Response, NextFunction } from "express";

const OktaJwtVerifier = require("@okta/jwt-verifier");

const oktaJwtVerifier = new OktaJwtVerifier({
  clientId: "0oazagfbvQBAliuer4x5",
  issuer: "https://dev-880601.okta.com/oauth2/default"
});
export async function oktaAuth(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const token = (req as any).token;
    if (!token) {
      return res.status(401).send("Not Authorised");
    }
    const jwt = await oktaJwtVerifier.verifyAccessToken(token);
    req["user"] = {
      uid: jwt.claims.uid,
      email: jwt.claims.sub
    };
    next();
  } catch (err) {
    return res.status(401).send(err.message);
  }
}
