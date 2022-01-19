export interface Author {
	name: string;
	intro: string;
	// bio: string;
	slug: string;
	picture: Picture;
}

interface Picture {
	url: string;
}
