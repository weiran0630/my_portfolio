import { gql } from 'graphql-request';

export const authorsQuery = gql`
	query GetAuthors {
		authors {
			name
			intro
			iam
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

export const postsQuery = (first: number, skip: number): string => gql`
	${POST_FRAGMENT}
	query GetPosts {
		posts(orderBy: date_DESC, first: ${first}, skip: ${skip}) {
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
			minsToRead
			authors {
				name
				picture {
					url
				}
			}
		}
	}
`;

export const TechQuery = gql`
	query GetTeches {
		frontendTeches {
			name
			icon {
				url
			}
		}
		backendTeches {
			name
			icon {
				url
			}
		}
		miscTeches {
			name
			icon {
				url
			}
		}
	}
`;

export const WorkExperienceQuery = gql`
  query GetWorkExperiences {
    workExperiences {
      company
      image {
        url
      }
      jobTitle
      description
    }
  }
`
