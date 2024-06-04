import { d as createComponent, g as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_DMypZEtD.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Nie byłoby jednak tak dużego zamieszania, gdyby nie fakt, że polskie prawo ochrony przyrody ulegało ciągłym zmianom. Szczególnie w zakresie usuwania drzew. Pod koniec 2016 roku ogłoszono, że prowadzone są prace nad nowelizacjami: ustawy o ochronie przyrody, ustawy Prawo ochrony środowiska oraz ustawy o udostępnianiu informacji o środowisku i jego ochronie, udziale społeczeństwa w ochronie środowiska oraz o ocenach oddziaływania na środowisko. Zgodnie z ogłoszonymi danymi, projekty Ministerstwa zakładały między innymi likwidację Generalnej Dyrekcji Ochrony Środowiska wraz z Regionalnymi Dyrekcjami i zastąpienie ich nową instytucją o ograniczonych kompetencjach.</p>";

				const frontmatter = {"title":"Wildlife Rehabilitation Center \"Fundacja Akcja dla Dzikich Zwierząt\" Website","date":"05.01.2024","description":"Website for \"Fundacja Akcja dla Dzikich Zwierząt\" – a fond and wildlife rehabilitation center located in Cracow, Poland. Built with Astro. Uses Decap CMS for blog management and Web3Forms for contact form management.","live":"https://akcjadladzikich.org/","code":"https://github.com/PolishCrow23/akcja-dla-dzikich-zwierzat","image":"/public/akcjadladzikich.org.png"};
				const file = "C:/Users/Iga/Documents/Code/portfolio/src/content/posts/1akcja.md";
				const url = undefined;
				function rawContent() {
					return "Nie byłoby jednak tak dużego zamieszania, gdyby nie fakt, że polskie prawo ochrony przyrody ulegało ciągłym zmianom. Szczególnie w zakresie usuwania drzew. Pod koniec 2016 roku ogłoszono, że prowadzone są prace nad nowelizacjami: ustawy o ochronie przyrody, ustawy Prawo ochrony środowiska oraz ustawy o udostępnianiu informacji o środowisku i jego ochronie, udziale społeczeństwa w ochronie środowiska oraz o ocenach oddziaływania na środowisko. Zgodnie z ogłoszonymi danymi, projekty Ministerstwa zakładały między innymi likwidację Generalnej Dyrekcji Ochrony Środowiska wraz z Regionalnymi Dyrekcjami i zastąpienie ich nową instytucją o ograniczonych kompetencjach.\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
