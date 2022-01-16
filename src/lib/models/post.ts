export interface CoverImage {
	url: string;
}

export interface Author {
	name: string;
}

export interface Post {
	title: string;
	slug: string;
	date: string;
	intro: string;
	content: string;
	tags: string[];
	coverImage: CoverImage;
	authors: Author[];
}
