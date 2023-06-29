// Needed because JWT is stored in its Base64 encoded form, as
// [HEADER | PAYLOAD (USRID) | SIGN ]
import jwtDecode from "jwt-decode";

export default function getLoggedInUserIdFromJWT(token) {
    const decodedToken = jwtDecode(token);
    const loggedInUserId = decodedToken.sub;
    return loggedInUserId; 
}