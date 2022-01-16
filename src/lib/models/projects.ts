export interface Image {
	url: string;
}

export interface Project {
	name: string;
	slug: string;
	description: string;
	demo: string;
	sourceCode: string;
	tags: string[];
	image: Image[];
}
