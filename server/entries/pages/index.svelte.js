import { c as create_ssr_component, v as validate_component } from "../../_app/immutable/chunks/index-de9f3fda.js";
import Dashboard from "./dashboard/index.svelte.js";
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Dashboard, "Dashboard").$$render($$result, {}, {}, {})}`;
});
export {
  Routes as default
};
