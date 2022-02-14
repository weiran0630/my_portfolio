export interface Author {
	name: string;
	intro: string;
	iam: string[];
	slug: string;
	picture: Picture;
}

interface Picture {
	url: string;
}
