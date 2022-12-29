export interface WorkExperience {
  company: string;
  jobTitle: string;
  image: Picture;
  description: string;
  workingWith?: string[]
}

interface Picture {
	url: string;
}
