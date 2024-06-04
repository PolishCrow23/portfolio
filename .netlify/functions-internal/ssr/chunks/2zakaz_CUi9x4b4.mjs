import { d as createComponent, g as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_DMypZEtD.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Mamy nadzieję, że historia z łabędziem skończy się dobrze. Dzięki interwencji pracowników firmy Staco Polska z Niepołomic w zeszłym tygodniu trafił do nas młody osobnik ze złamanym skrzydłem.</p>";

				const frontmatter = {"title":"Social Campaign \"Zakaz Kolców\" Website","date":"November 9 2023","description":"Website for \"Zakaz Kolców\" – a social campaign promoting safe environment for city animals. Built with Astro.","live":"https://zakazkolcow.pl/","code":"https://github.com/PolishCrow23/Wild-Birds-Protection-Website","image":"/public/zakazkolcow.pl.png"};
				const file = "C:/Users/Iga/Documents/Code/portfolio/src/content/posts/2zakaz.md";
				const url = undefined;
				function rawContent() {
					return "\nMamy nadzieję, że historia z łabędziem skończy się dobrze. Dzięki interwencji pracowników firmy Staco Polska z Niepołomic w zeszłym tygodniu trafił do nas młody osobnik ze złamanym skrzydłem.";
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
