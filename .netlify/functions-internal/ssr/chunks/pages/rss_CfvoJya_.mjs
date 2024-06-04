import rss from '@astrojs/rss';
import { g as getCollection } from './_slug__Bvd_-bT4.mjs';

const SITE_TITLE = "Iga Spodzieja";
const SITE_DESCRIPTION = "Portfolio Igi Spodziei";

async function GET(context) {
	const posts = await getCollection('blog');
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: posts.map((post) => ({
			...post.data,
			link: `/blog/${post.slug}/`,
		})),
	});
}

export { GET };
