import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import './chunks/astro_DMypZEtD.mjs';
import 'clsx';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const path = toPath(params);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"@font-face{font-family:Roboto;src:url(/fonts/Roboto-Medium.ttf) format(\"truetype\");font-weight:500;font-style:normal;font-display:swap}@font-face{font-family:Roboto;src:url(/fonts/Roboto-Regular.ttf) format(\"truetype\");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:Roboto;src:url(/fonts/Roboto-Light.ttf) format(\"truetype\");font-weight:300;font-style:normal;font-display:swap}@font-face{font-family:Amatic SC;src:url(/fonts/AmaticSC-Regular.ttf) format(\"truetype\");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:Open Sans Condensed;src:url(/fonts/OpenSans-CondLight.ttf) format(\"truetype\");font-weight:400;font-style:normal;font-display:swap}:root{--celadon: #14AAA1;--gray: #6F7775;--black: #263435;--purple: #7f8efe}html{font-size:62.5%;box-sizing:border-box;scroll-behavior:smooth}*,*:before,*:after{box-sizing:inherit}*{margin:0;padding:0}body{font-family:Arial;font-weight:300}.chevron-link{font-weight:500;font-size:1.4rem;color:var(--celadon);display:block;text-align:right}h2{font-size:2.4rem}ul{list-style:none}h2,h3,li,label{color:var(--black)}p{font-size:1.8rem;font-weight:300;line-height:1.8;margin-bottom:1em;text-align:justify}img{width:100%}svg{vertical-align:middle}.button svg{vertical-align:middle;margin-left:5px}.thick-hr{border-top:7px solid #ff6dc6;width:65px}span{font-size:1.2rem}a{text-decoration:none;transition-duration:.3s;font-weight:400;color:#7f8efe}a:hover{color:var(--gray);transition-duration:.2s}hr{border:0;border-top:2px solid #14aaa1;width:27px;margin-bottom:1.5em}.button{display:inline-block;padding-block:15px;width:193px;border:1.5px solid var(--purple);border-radius:8px;text-align:center;font-size:1.6rem;font-weight:500;font-family:Roboto}.button-celadon{background-color:var(--purple);color:#fff}.button-celadon:hover{background-color:transparent;color:var(--purple)}.button-light{background-color:#fff;color:var(--celadon)}.button-light:hover{background-color:var(--celadon);color:#fff}.bold{font-weight:500}@media (max-width: 468px){.button{width:50%;gap:10px}main{padding-inline:2%}}nav[data-astro-cid-3ef6ksr2]{display:flex;justify-content:space-between;align-items:center;padding:2em 11em}ul[data-astro-cid-3ef6ksr2]{display:flex;gap:6em}a[data-astro-cid-3ef6ksr2]{font-size:1.8em;color:var(--black)}img[data-astro-cid-3ef6ksr2]{width:160px}footer[data-astro-cid-sz7xmlte]{display:flex;justify-content:flex-end;padding:2em 4em;gap:1.5em}\na{color:var(--celadon)}a:hover{color:var(--gray)}.slot-wrapper ul{list-style:disc;margin-inline:1.8rem 0;margin-block:1.8rem}.slot-wrapper li{font-size:1.6rem;margin-block:.6em}.slot-wrapper ul li{line-height:1.4}.slot-wrapper ol li{line-height:1.8}.slot-wrapper h2{font-size:2.4rem;margin-block:1.2em .8em}main{margin-block:4em 6em;margin-inline:2%}.post{max-width:720px;margin:0 auto}.title{margin:0 6em 0 5em}.post h1{text-align:center;font-size:3.6rem}.post hr{width:100%;margin:.5em auto 6em}\n"}],"routeData":{"route":"/blog/[slug]","isIndex":false,"type":"page","pattern":"^\\/blog\\/([^/]+?)\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/blog/[slug].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/rss.xml","isIndex":false,"type":"endpoint","pattern":"^\\/rss\\.xml\\/?$","segments":[[{"content":"rss.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rss.xml.js","pathname":"/rss.xml","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"@font-face{font-family:Roboto;src:url(/fonts/Roboto-Medium.ttf) format(\"truetype\");font-weight:500;font-style:normal;font-display:swap}@font-face{font-family:Roboto;src:url(/fonts/Roboto-Regular.ttf) format(\"truetype\");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:Roboto;src:url(/fonts/Roboto-Light.ttf) format(\"truetype\");font-weight:300;font-style:normal;font-display:swap}@font-face{font-family:Amatic SC;src:url(/fonts/AmaticSC-Regular.ttf) format(\"truetype\");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:Open Sans Condensed;src:url(/fonts/OpenSans-CondLight.ttf) format(\"truetype\");font-weight:400;font-style:normal;font-display:swap}:root{--celadon: #14AAA1;--gray: #6F7775;--black: #263435;--purple: #7f8efe}html{font-size:62.5%;box-sizing:border-box;scroll-behavior:smooth}*,*:before,*:after{box-sizing:inherit}*{margin:0;padding:0}body{font-family:Arial;font-weight:300}.chevron-link{font-weight:500;font-size:1.4rem;color:var(--celadon);display:block;text-align:right}h2{font-size:2.4rem}ul{list-style:none}h2,h3,li,label{color:var(--black)}p{font-size:1.8rem;font-weight:300;line-height:1.8;margin-bottom:1em;text-align:justify}img{width:100%}svg{vertical-align:middle}.button svg{vertical-align:middle;margin-left:5px}.thick-hr{border-top:7px solid #ff6dc6;width:65px}span{font-size:1.2rem}a{text-decoration:none;transition-duration:.3s;font-weight:400;color:#7f8efe}a:hover{color:var(--gray);transition-duration:.2s}hr{border:0;border-top:2px solid #14aaa1;width:27px;margin-bottom:1.5em}.button{display:inline-block;padding-block:15px;width:193px;border:1.5px solid var(--purple);border-radius:8px;text-align:center;font-size:1.6rem;font-weight:500;font-family:Roboto}.button-celadon{background-color:var(--purple);color:#fff}.button-celadon:hover{background-color:transparent;color:var(--purple)}.button-light{background-color:#fff;color:var(--celadon)}.button-light:hover{background-color:var(--celadon);color:#fff}.bold{font-weight:500}@media (max-width: 468px){.button{width:50%;gap:10px}main{padding-inline:2%}}nav[data-astro-cid-3ef6ksr2]{display:flex;justify-content:space-between;align-items:center;padding:2em 11em}ul[data-astro-cid-3ef6ksr2]{display:flex;gap:6em}a[data-astro-cid-3ef6ksr2]{font-size:1.8em;color:var(--black)}img[data-astro-cid-3ef6ksr2]{width:160px}footer[data-astro-cid-sz7xmlte]{display:flex;justify-content:flex-end;padding:2em 4em;gap:1.5em}\n"},{"type":"external","src":"/_astro/index.CM5tVLSP.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://example.com","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["C:/Users/Iga/Documents/Code/portfolio/src/pages/blog/[slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["C:/Users/Iga/Documents/Code/portfolio/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/Iga/Documents/Code/portfolio/src/pages/rss.xml.js",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/rss.xml@_@js",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_DLg3bJZt.mjs","/src/pages/index.astro":"chunks/pages/index_bfvMXr2e.mjs","/src/pages/rss.xml.js":"chunks/pages/rss_CfvoJya_.mjs","\u0000@astrojs-manifest":"manifest_LAMtU9eO.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_8ndW0axJ.mjs","\u0000@astro-page:src/pages/blog/[slug]@_@astro":"chunks/_slug__DwfTtW_A.mjs","\u0000@astro-page:src/pages/rss.xml@_@js":"chunks/rss_BJC4WOYZ.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_CSWlruK5.mjs","C:/Users/Iga/Documents/Code/portfolio/src/content/posts/1akcja.md?astroContentCollectionEntry=true":"chunks/1akcja_CVcyqzvs.mjs","C:/Users/Iga/Documents/Code/portfolio/src/content/posts/2zakaz.md?astroContentCollectionEntry=true":"chunks/2zakaz_D4wDjrDN.mjs","C:/Users/Iga/Documents/Code/portfolio/src/content/posts/3zenolithic.md?astroContentCollectionEntry=true":"chunks/3zenolithic_BXAPsqYd.mjs","C:/Users/Iga/Documents/Code/portfolio/src/content/posts/1akcja.md?astroPropagatedAssets":"chunks/1akcja_C949zGEu.mjs","C:/Users/Iga/Documents/Code/portfolio/src/content/posts/2zakaz.md?astroPropagatedAssets":"chunks/2zakaz_DFbr79-V.mjs","C:/Users/Iga/Documents/Code/portfolio/src/content/posts/3zenolithic.md?astroPropagatedAssets":"chunks/3zenolithic_DA1fQbXJ.mjs","C:/Users/Iga/Documents/Code/portfolio/src/content/posts/1akcja.md":"chunks/1akcja_6Q8VKy4Z.mjs","C:/Users/Iga/Documents/Code/portfolio/src/content/posts/2zakaz.md":"chunks/2zakaz_CUi9x4b4.mjs","C:/Users/Iga/Documents/Code/portfolio/src/content/posts/3zenolithic.md":"chunks/3zenolithic_CChU7fBB.mjs","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/index.CM5tVLSP.css","/Akcja.png","/akcjadladzikich.org.png","/beige-background.png","/bk-figma.png","/blog-placeholder-about.jpg","/blue-background.png","/collage.png","/favicon.svg","/footer.png","/gradient.png","/hi.png","/iga.png","/image.png","/logo.ai","/logo.png","/marine-room.png","/me1.jpg","/photo1.png","/photo2.png","/photo3.png","/pink-blue-background.png","/plushies.png","/portfoliopng.png","/resin1.png","/resin2.png","/resin3.png","/resin4.png","/resin5.png","/resin6.png","/room-blue.jpg","/room-yellow.jpg","/Screenshot 2023-06-27 175040.png","/Untitled design (1).png","/Untitled design (3).jpg","/wendigo.png","/wood-pigeon.png","/zakazkolcow.pl.png","/fonts/atkinson-bold.woff","/fonts/atkinson-regular.woff"],"buildFormat":"directory","checkOrigin":false});

export { manifest };
