export class Parser {
  static parseRequest(req) {
    return {
      ipaddress: req.connection.remoteAddress || "Could not get IP Address",
      language: Parser.getLanguage(req.headers["accept-language"]),
      software: Parser.getOS(req.headers["user-agent"])
    }
  }

  static getOS(userAgent) {
    let osInfo = userAgent.split(/[\(\)]/)[1];
    return osInfo.trim();
  }

  static getLanguage(acceptLanguage) {
    return acceptLanguage.split(',')[0].trim();
  }
}