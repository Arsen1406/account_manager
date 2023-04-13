import { useCookies } from 'react-cookie';


export default function CheckAuth() {
    const [cookies, setCookie] = useCookies(['user']);
    if (cookies.token === true) {
        return cookies;
    } else
    return false
}
