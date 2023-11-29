export function getCookies(): Record<string, string> {
  return document.cookie.split("; ").reduce((dict, cookieRow) => {
    const [key, value] = cookieRow.split("=");
    dict[key] = value;
    return dict;
  }, {});
}

export function deleteCookie(name: string) {
  document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:01 GMT`;
}

export function setCookie(
  name: string,
  value: string,
  ttl: number,
  path: string,
  samesite: string,
  domain?: string
) {
  document.cookie =
    name +
    "=" +
    encodeURIComponent(value || "") +
    `; Expires=${new Date(+new Date() + ttl * 1000).toUTCString()}` +
    `; Path=${path}` +
    (domain ? "; Domain=" + domain : "") +
    `; SameSite=${samesite}` +
    "; Secure";
}

export function decodeCookie(name: string) {
  return decodeURIComponent(
    (("; " + document.cookie).split("; " + name + "=")[1] || "").split(";")[0]
  );
}
