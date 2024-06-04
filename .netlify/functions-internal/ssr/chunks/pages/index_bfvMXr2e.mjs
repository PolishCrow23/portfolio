import { i as createAstro, d as createComponent, g as renderTemplate, m as maybeRenderHead, j as addAttribute, h as renderComponent, k as renderHead } from '../astro_DMypZEtD.mjs';
import 'kleur/colors';
import { g as getCollection, $ as $$BaseHead, a as $$Header, b as $$Footer } from './_slug__Bvd_-bT4.mjs';
import 'clsx';
/* empty css                          */

const $$Astro$4 = createAstro("https://example.com");
const $$Post = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Post;
  const { post } = Astro2.props;
  let words = post.body.split(" ").slice(0, 22);
  words.join(" ");
  return renderTemplate`${maybeRenderHead()}<div class="post-card" data-astro-cid-huxyrzvi> <div class="title-post" data-astro-cid-huxyrzvi> <a${addAttribute(`/blog/${post.slug}`, "href")} data-astro-cid-huxyrzvi> <h2 class="title" data-astro-cid-huxyrzvi> ${post.data.title} </h2> </a> <p data-astro-cid-huxyrzvi> ${post.data.description} </p> <div class="buttons" data-astro-cid-huxyrzvi> ${post.data.live && renderTemplate`<a${addAttribute(post.data.live, "href")} data-astro-cid-huxyrzvi> <h2 class="button button-celadon" data-astro-cid-huxyrzvi>
Live
</h2> </a>`} ${post.data.code && renderTemplate`<a${addAttribute(post.data.code, "href")} class="buttons" data-astro-cid-huxyrzvi> <h2 class="button button-celadon" data-astro-cid-huxyrzvi>
Code
</h2> </a>`} </div> </div> <div data-astro-cid-huxyrzvi> <a${addAttribute(`/blog/${post.slug}`, "href")} data-astro-cid-huxyrzvi> <img${addAttribute(post.data.image, "src")}${addAttribute(500, "width")}${addAttribute(550, "height")}${addAttribute(post.data.title, "alt")} data-astro-cid-huxyrzvi> </a> </div> </div> `;
}, "C:/Users/Iga/Documents/Code/portfolio/src/components/Post.astro", void 0);

const $$Astro$3 = createAstro("https://example.com");
const $$BlogHighlight = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$BlogHighlight;
  const { posts } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section data-astro-cid-dn45ojdz> <div class="container" data-astro-cid-dn45ojdz> <h2 id="my-projects" data-astro-cid-dn45ojdz>My projects</h2> <hr class="thick-hr" data-astro-cid-dn45ojdz> <div class="cards-container" data-astro-cid-dn45ojdz> ${posts.slice(0, 3).map((post) => renderTemplate`${renderComponent($$result, "Post", $$Post, { "post": post, "data-astro-cid-dn45ojdz": true })}`)} </div> <!-- <a class="chevron-link" href="/blog">
            Starsze
            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24"><path fill="currentColor" d="M10 17.75a.74.74 0 0 1-.53-.22a.75.75 0 0 1 0-1.06L13.94 12L9.47 7.53a.75.75 0 0 1 1.06-1.06l5 5a.75.75 0 0 1 0 1.06l-5 5a.74.74 0 0 1-.53.22"/></svg>
        </a> --> </div> </section> `;
}, "C:/Users/Iga/Documents/Code/portfolio/src/components/BlogHighlight.astro", void 0);

const $$Astro$2 = createAstro("https://example.com");
const $$SocialLinks = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$SocialLinks;
  return renderTemplate`${maybeRenderHead()}<div class="social-links" data-astro-cid-zamss57n> <a href="https://www.linkedin.com/in/iga-spodzieja-220a13287" data-astro-cid-zamss57n> <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24" data-astro-cid-zamss57n><path fill="currentColor" d="M17.303 2.25H6.697A4.447 4.447 0 0 0 2.25 6.697v10.606a4.447 4.447 0 0 0 4.447 4.447h10.606a4.447 4.447 0 0 0 4.447-4.447V6.697a4.447 4.447 0 0 0-4.447-4.447m-8.46 15.742a.4.4 0 0 1-.4.423h-1.78a.411.411 0 0 1-.4-.412V10.6a.4.4 0 0 1 .4-.411h1.78a.399.399 0 0 1 .4.411zM7.52 8.632a1.467 1.467 0 1 1 .022-2.935A1.467 1.467 0 0 1 7.52 8.63m10.817 9.35a.389.389 0 0 1-.378.388H16.08a.39.39 0 0 1-.378-.389v-3.424c0-.511.156-2.223-1.356-2.223c-1.179 0-1.412 1.2-1.457 1.734v3.991a.39.39 0 0 1-.378.39h-1.823a.389.389 0 0 1-.389-.39v-7.493a.389.389 0 0 1 .39-.378h1.822a.389.389 0 0 1 .39.378v.645a2.59 2.59 0 0 1 2.434-1.112c3.035 0 3.024 2.835 3.024 4.447z" data-astro-cid-zamss57n></path></svg> <span data-astro-cid-zamss57n>Linkedin</span> </a> <a href="https://github.com/PolishCrow23" data-astro-cid-zamss57n> <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24" data-astro-cid-zamss57n><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2" data-astro-cid-zamss57n></path></svg> <span data-astro-cid-zamss57n>GitHub</span> </a> <a href="https://patronite.pl/AkcjaDlaDzikichZwierzat" data-astro-cid-zamss57n> <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 20 20" data-astro-cid-zamss57n><g fill="currentColor" data-astro-cid-zamss57n><path d="M7.8 6.35c.56 0 1.01-.45 1.01-1.01S8.36 4.33 7.8 4.33s-1.01.45-1.01 1.01s.45 1.01 1.01 1.01" data-astro-cid-zamss57n></path><path fill-rule="evenodd" d="M9.83 8.55c0-1.08-.91-1.86-2.03-1.86c-1.12 0-2.03.78-2.03 1.86v.51c0 .09.04.18.1.24c.06.06.15.1.24.1h3.38c.09 0 .18-.04.24-.1c.06-.06.1-.15.1-.24zM5.75 11.5a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75m0 3a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75" clip-rule="evenodd" data-astro-cid-zamss57n></path><path fill-rule="evenodd" d="M2.5 2.5c0-1.102.898-2 2-2h6.69c.562 0 1.092.238 1.465.631l.006.007l4.312 4.702c.359.383.527.884.527 1.36v10.3c0 1.102-.898 2-2 2h-11c-1.102 0-2-.898-2-2zm8.689 0H4.5v15h11V7.192l-4.296-4.685l-.003-.001a.041.041 0 0 0-.012-.006" clip-rule="evenodd" data-astro-cid-zamss57n></path><path fill-rule="evenodd" d="M11.19.5a1 1 0 0 1 1 1v4.7h4.31a1 1 0 1 1 0 2h-5.31a1 1 0 0 1-1-1V1.5a1 1 0 0 1 1-1" clip-rule="evenodd" data-astro-cid-zamss57n></path></g></svg> <span data-astro-cid-zamss57n>Resume</span> </a> </div> `;
}, "C:/Users/Iga/Documents/Code/portfolio/src/components/SocialLinks.astro", void 0);

const $$Astro$1 = createAstro("https://example.com");
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Hero;
  return renderTemplate`${maybeRenderHead()}<section class="hero" data-astro-cid-bbe6dxrz> <div class="flex-container" data-astro-cid-bbe6dxrz> <div class="flex-item-1" data-astro-cid-bbe6dxrz> <div data-astro-cid-bbe6dxrz> <span class="hero-span" data-astro-cid-bbe6dxrz>Hello, world! 🌸</span> <h1 data-astro-cid-bbe6dxrz>I am Iga,<br data-astro-cid-bbe6dxrz>Softwarer Developer,<span class="purple-border" data-astro-cid-bbe6dxrz></span> <br data-astro-cid-bbe6dxrz>3D Artist<span class="purple-border" data-astro-cid-bbe6dxrz></span></h1> </div> <a class="mail" href="mailto:igaspodzieja00@gmail.com" data-astro-cid-bbe6dxrz> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16" data-astro-cid-bbe6dxrz><path fill="currentColor" fill-rule="evenodd" d="M2 3.5h12a.5.5 0 0 1 .5.5v.572L8 8.286L1.5 4.572V4a.5.5 0 0 1 .5-.5m-.5 2.8V12a.5.5 0 0 0 .5.5h12a.5.5 0 0 0 .5-.5V6.3L8.372 9.8L8 10.014L7.628 9.8zM0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2z" clip-rule="evenodd" data-astro-cid-bbe6dxrz></path></svg> <span class="mail" data-astro-cid-bbe6dxrz>igaspodzieja00@gmail.com</span> </a> ${renderComponent($$result, "SocialLinks", $$SocialLinks, { "data-astro-cid-bbe6dxrz": true })} </div> <div class="flex-item-2" data-astro-cid-bbe6dxrz> <img src="/me1.jpg" data-astro-cid-bbe6dxrz> </div> </div> </section> `;
}, "C:/Users/Iga/Documents/Code/portfolio/src/components/Hero.astro", void 0);

const $$Astro = createAstro("https://example.com");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const posts = await getCollection("posts");
  const { title, description } = Astro2.props;
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": description })}${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} ${renderComponent($$result, "Hero", $$Hero, {})} ${renderComponent($$result, "BlogHighlight", $$BlogHighlight, { "posts": posts })} <!-- <ContactForm /> --> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/Users/Iga/Documents/Code/portfolio/src/pages/index.astro", void 0);

const $$file = "C:/Users/Iga/Documents/Code/portfolio/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
