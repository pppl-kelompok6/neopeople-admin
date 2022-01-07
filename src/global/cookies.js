import Cookies from "js-cookie";

function CookiesReturn() {
    const cookies = Cookies.get("Token")
    return cookies
}

export { CookiesReturn};