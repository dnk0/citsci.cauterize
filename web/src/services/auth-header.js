export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('cauterize.access_token'));

    if (user && user.accessToken) {
        return { Authorization: 'Bearer ' + user.accessToken };
    } else {
        return {};
    }
}
