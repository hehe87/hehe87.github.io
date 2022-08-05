import { c as create_ssr_component, v as validate_component } from "../../_app/immutable/chunks/index-de9f3fda.js";
import Menu from "./menu.svelte.js";
import Login from "./login.svelte.js";
const app = "";
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"grid grid-cols-12"}"><div class="${"mx-2 my-2 px-5 py-4 bg-white rounded h-screen"}"><nav><div class="${"text-center p-5"}"><i class="${"fab fa-pagelines fa-2x"}"></i></div>
            <hr>
            ${validate_component(Menu, "Menu").$$render($$result, {}, {}, {})}</nav></div>
    <div class="${"col-span-11"}"><div class="${"flex justify-end m-3"}">${validate_component(Login, "Login").$$render($$result, {}, {}, {})}</div>
        <div class="${"m-4"}">${slots.default ? slots.default({}) : ``}</div></div></div>`;
});
export {
  _layout as default
};
