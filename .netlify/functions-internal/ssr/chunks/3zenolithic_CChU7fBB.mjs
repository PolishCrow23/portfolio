import { d as createComponent, g as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_DMypZEtD.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Mamy nadzieję, że historia z łabędziem skończy się dobrze. Dzięki interwencji pracowników firmy Staco Polska z Niepołomic w zeszłym tygodniu trafił do nas młody osobnik ze złamanym skrzydłem.</p>";

				const frontmatter = {"title":"3D Artist in Zenolithic","date":"04.16.2024","description":"Made 3D printing/game ready models using Blender (and Substance Painter/Aseprite). Modeled, sculpted, textured, rigged and animated models. Collaborated with other 3D/2D artists and programmers.","image":"/public/collage.png"};
				const file = "C:/Users/Iga/Documents/Code/portfolio/src/content/posts/3zenolithic.md";
				const url = undefined;
				function rawContent() {
					return "\r\nMamy nadzieję, że historia z łabędziem skończy się dobrze. Dzięki interwencji pracowników firmy Staco Polska z Niepołomic w zeszłym tygodniu trafił do nas młody osobnik ze złamanym skrzydłem.\r\n";
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
