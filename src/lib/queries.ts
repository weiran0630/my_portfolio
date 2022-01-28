import { gql } from 'graphql-request';

export const authorsQuery = gql`
	query GetAuthors {
		authors {
			name
			intro
			slug
			picture {
				url
			}
		}
	}
`;
export const projectsQuery = gql`
	query GetProjects {
		projects {
			name
			slug
			description
			tags
			demo
			sourceCode
			image {
				url
			}
		}
	}
`;

const POST_FRAGMENT = gql`
	fragment PostDetails on Post {
		title
		slug
		date
		tags
		coverImage {
			url
		}
	}
`;

export const postsQuery = (first: number, skip: number) => gql`
	${POST_FRAGMENT}
	query GetPosts {
		posts(orderBy: createdAt_DESC, first: ${first}, skip: ${skip}) {
			...PostDetails
			intro
		}
	}
`;

export const postQuery = gql`
	${POST_FRAGMENT}
	query GetPost($slug: String!) {
		post(where: { slug: $slug }) {
			...PostDetails
			content
			authors {
				name
				picture {
					url
				}
			}
		}
	}
`;
