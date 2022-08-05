import { g as getContext, c as create_ssr_component, a as subscribe, e as escape } from "../../_app/immutable/chunks/index-de9f3fda.js";
const getStores = () => {
  const stores = getContext("__svelte__");
  return {
    page: {
      subscribe: stores.page.subscribe
    },
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    get preloading() {
      console.error("stores.preloading is deprecated; use stores.navigating instead");
      return {
        subscribe: stores.navigating.subscribe
      };
    },
    session: stores.session,
    updated: stores.updated
  };
};
const throw_error = (verb) => {
  throw new Error(
    `Can only ${verb} session store in browser`
  );
};
const session = {
  subscribe(fn) {
    const store = getStores().session;
    return store.subscribe(fn);
  },
  set: () => throw_error("set"),
  update: () => throw_error("update")
};
const Login = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let user;
  let $session, $$unsubscribe_session;
  $$unsubscribe_session = subscribe(session, (value) => $session = value);
  console.log(user);
  user = $session.user;
  $$unsubscribe_session();
  return `${!user ? `<button class="${"btn btn-primary"}">Log In with Cognito</button>` : `<h2>Welcome ${escape(user.email)}!</h2>
    <p>Your username is ${escape(user.username)} and your email has been verified: ${escape(user.email_verified)}</p>

`}`;
});
export {
  Login as default
};
