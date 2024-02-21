import jwt, { VerifyErrors, Secret } from "jsonwebtoken";

export const verifyJwtToken = (
  jwtSecret: Secret,
  token: string
): { _id: string; rol: string } | null => {
  try {
    const decoded = jwt.verify(token, jwtSecret) as {
      _id: string;
      rol: string;
    };
    return decoded;
  } catch (error) {
    console.error("JWT verification failed:", error.message);
    return null;
  }
};
