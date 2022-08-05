import { Providers, SvelteKitAuth } from "sk-auth";
const DOMAIN = "rebot.auth.ap-southeast-2.amazoncognito.com";
const config = {
  accessTokenUrl: `https://${DOMAIN}/oauth2/token`,
  profileUrl: `https://${DOMAIN}/oauth2/userInfo`,
  authorizationUrl: `https://${DOMAIN}/oauth2/authorize`,
  redirect: "http://localhost:5173",
  clientId: "4u5rq7nj5kalla0a9e6ji1hvk5",
  clientSecret: "5b4il5gr6dn2r4kt7dp317p5hurshhnrm25rf97s07ntt5um7h3",
  scope: ["openid", "email"],
  id: "cognito",
  contentType: "application/x-www-form-urlencoded",
  httponly: true
};
const oauthProvider = new Providers.OAuth2Provider(config);
const appAuth = new SvelteKitAuth({
  providers: [oauthProvider]
});
const { get: GET, post: POST } = appAuth;
export {
  GET,
  POST
};
