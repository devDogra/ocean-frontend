export default function getAxiosRequestConfig(jwtString) {
    const config = {
        headers: {
            Authorization: "Bearer " + jwtString,
        },
    };

    return config; 
}