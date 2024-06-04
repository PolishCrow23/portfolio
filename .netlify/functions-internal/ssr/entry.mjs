import { renderers } from './renderers.mjs';
import { manifest } from './manifest_LAMtU9eO.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_8ndW0axJ.mjs');
const _page1 = () => import('./chunks/_slug__DwfTtW_A.mjs');
const _page2 = () => import('./chunks/rss_BJC4WOYZ.mjs');
const _page3 = () => import('./chunks/index_CSWlruK5.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/blog/[slug].astro", _page1],
    ["src/pages/rss.xml.js", _page2],
    ["src/pages/index.astro", _page3]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "ab2c474b-6b5e-4d2b-a8ff-057fa6744c79"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
