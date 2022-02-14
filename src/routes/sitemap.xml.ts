import { client } from '$lib/shared/graphql-client';
import { gql } from 'graphql-request';

export const get = async () => {
	const queryPosts = gql`
		query Posts {
			posts {
				title
				slug
			}
		}
	`;

	const { posts } = await client.request(queryPosts);
	const body = sitemap(posts);

	const headers = {
		'Cache-Control': 'max-age=0, s-maxage=3600',
		'Content-Type': 'application/xml'
	};

	return {
		headers,
		body
	};
};

const sitemap = (blogs) =>
	`<?xml version="1.0" encoding="UTF-8" ?>
    <urlset
      xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
      xmlns:xhtml="https://www.w3.org/1999/xhtml"
      xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
      xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
      xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
    >
      <url>
        <loc>https://edison-web-dev.vercel.app/</loc>
        <changefreq>daily</changefreq>
        <priority>0.7</priority>
      </url>
  
      ${blogs
				.map(
					(blog) => `
      <url>
        <loc>https://edison-web-dev.vercel.app/blog/${blog.slug}</loc>
        <changefreq>daily</changefreq>
        <priority>0.7</priority>
      </url>
      `
				)
				.join('')}
    </urlset>`;
