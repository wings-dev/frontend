import jwt_decode from "jwt-decode";

export default function ({ app }) {
  const jwtToken = app.$auth.strategy.token.get()

  if (jwtToken && jwtToken.startsWith('Bearer ')) {
    const tokenPayload = jwt_decode(jwtToken.substr(7))
    app.$auth.setUser(tokenPayload)
  }
}
