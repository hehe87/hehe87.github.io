import { c as create_ssr_component, b as each, e as escape } from "../../../_app/immutable/chunks/index-de9f3fda.js";
import "chart.js";
const Clients = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let names = [
    {
      name: "Chinaza Akachi",
      status: "In Progress",
      size: "456 MB",
      date: "09 Dec 2019",
      time: "05:18AM",
      checked: true
    },
    {
      name: "Bernarr Dominik",
      status: "In Progress",
      size: "456 MB",
      date: "09 Dec 2019",
      time: "05:18AM",
      checked: false
    },
    {
      name: "Beth Murphy",
      status: "In Progress",
      size: "456 MB",
      date: "09 Dec 2019",
      time: "05:18AM",
      checked: true
    }
  ];
  return `<div><div class="${"flex mb-6"}"><div class="${"flex-none px-4 mt-1"}"><i class="${"fas fa-angle-left fa-2x"}"></i></div>
        <div class="${"flex-1"}"><h1 class="${"font-bold text-4xl"}"><a href="${"/"}">Property Brokers Te Puke</a></h1>
            <h2 class="${""}">Client detail</h2></div>
        <div class="${"flex justify-end"}"><i class="${"fas fa-plus-circle fa-3x text-blue-700"}"></i></div></div>

    <div class="${"grid grid-cols-2 gap-8"}"><div class="${"bg-white py-7 px-5 rounded overflow-hidden"}"><h1 class="${"font-medium"}">Title</h1>
            ${``}</div>
        <div class="${"bg-white py-7 px-5 rounded overflow-hidden"}"><h1 class="${"font-medium"}">Text</h1>
            ${``}</div></div>

    <table class="${"myTable w-full my-5 border-separate border-spacing-y-2 "}"><thead class="${"text-left"}"><tr><th>Name</th>
            <th>Status</th>
            <th>Size</th>
            <th>Date</th>
            <th>Time</th></tr></thead>
        <tbody>${each(names, (name) => {
    return `<tr><td>${name.checked ? `<i class="${"fas fa-check-square text-purple-700"}"></i>` : `<i class="${"fas fa-square text-gray-100"}"></i>`}
                ${escape(name.name)}</td>
            <td>${escape(name.status)}</td>
            <td>${escape(name.size)}</td>
            <td>${escape(name.date)}</td>
            <td>${escape(name.time)}</td>
        </tr>`;
  })}</tbody></table></div>`;
});
export {
  Clients as default
};
