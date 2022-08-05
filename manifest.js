export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-93b3b0ae.js","imports":["_app/immutable/start-93b3b0ae.js","_app/immutable/chunks/index-9800a3fe.js"],"stylesheets":[]},
		nodes: [
			() => import('./server/nodes/0.js'),
			() => import('./server/nodes/1.js'),
			() => import('./server/nodes/5.js'),
			() => import('./server/nodes/2.js'),
			() => import('./server/nodes/3.js'),
			() => import('./server/nodes/4.js'),
			() => import('./server/nodes/6.js'),
			() => import('./server/nodes/7.js')
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				id: "clients",
				pattern: /^\/clients\/?$/,
				names: [],
				types: [],
				path: "/clients",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				id: "contacts",
				pattern: /^\/contacts\/?$/,
				names: [],
				types: [],
				path: "/contacts",
				shadow: null,
				a: [0,4],
				b: [1]
			},
			{
				type: 'page',
				id: "dashboard",
				pattern: /^\/dashboard\/?$/,
				names: [],
				types: [],
				path: "/dashboard",
				shadow: null,
				a: [0,5],
				b: [1]
			},
			{
				type: 'page',
				id: "login",
				pattern: /^\/login\/?$/,
				names: [],
				types: [],
				path: "/login",
				shadow: null,
				a: [0,6],
				b: [1]
			},
			{
				type: 'page',
				id: "menu",
				pattern: /^\/menu\/?$/,
				names: [],
				types: [],
				path: "/menu",
				shadow: null,
				a: [0,7],
				b: [1]
			},
			{
				type: 'endpoint',
				id: "api/auth/[...auth]",
				pattern: /^\/api\/auth(?:\/(.*))?\/?$/,
				names: ["auth"],
				types: [null],
				load: () => import('./server/entries/endpoints/api/auth/_...auth_.js')
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
