import { c as create_ssr_component, b as each, e as escape } from "../../../_app/immutable/chunks/index-de9f3fda.js";
const Dashboard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let clients = [
    {
      name: "James McRealtor",
      jobTitle: "Property Brokers",
      numberOfContact: 12039
    },
    {
      name: "James McRealtor",
      jobTitle: "Property Brokers",
      numberOfContact: 12039
    },
    {
      name: "James McRealtor",
      jobTitle: "Property Brokers",
      numberOfContact: 12039
    }
  ];
  return `<div><h1 class="${"text-4xl font-bold"}">Clients</h1>
<form class="${"py-5"}"><input type="${"text"}" placeholder="${"Search"}"></form>
<div class="${"grid grid-cols-1 gap-y-4"}">${each(clients, (client) => {
    return `<a href="${"/clients"}"><div class="${"grid grid-cols-4 bg-white p-4 rounded overflow-hidden shadow"}"><div class="${"px-2 flex"}"><div class="${"px-3 flex-none"}"><i class="${"fas fa-chart-pie fa-3x"}"></i></div>
                    <div class="${"flex-1"}"><span class="${"text-2xl font-bold"}">${escape(client.jobTitle)}</span><br>
                        <span class="${"text-gray-400"}">${escape(client.name)}</span>
                    </div></div>
                <div class="${"col-span-3"}"><span class="${"text-2xl font-bold"}">${escape(client.numberOfContact)}</span><br>
                    <span class="${"text-gray-400"}">contacts</span>
                </div></div>
        </a>`;
  })}</div></div>`;
});
export {
  Dashboard as default
};
