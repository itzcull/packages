/** @description For ensuring a string is a FQDN with an optionally prepended http or https scheme */
export const VALID_WEBSITE_URL_REGEX =
  /^(https?:\/\/)?(((?!-)[a-zA-Z0-9-]{0,62}[a-zA-Z0-9]\.)+[a-zA-Z]{2,63})(\/[a-zA-Z0-9._~\-!$&'()*+,;=:@%]+)*(\/)?$/

export const HTTPS_SCHEME_REGEX = /^https:\/\//

export const HTTP_SCHEME_REGEX = /^http:\/\//

export const UUID_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i