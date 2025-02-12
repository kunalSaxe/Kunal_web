export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "work",
		title: "Work",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const services = [
	{
		title: "Data Engineer",
		icon: "/backend.webp",
	},
	{
		title: "Full Stack Web Developer",
		icon: "/web.webp",
	},
	{
		title: "App Developer",
		icon: "/mobile.webp",
	},
	{
		title: "Software Engineer",
		icon: "/creator.webp",
	},
];

const technologies = [
	{
		name: "HTML 5",
		icon: "/tech/html.webp",
	},
	{
		name: "CSS 3",
		icon: "/tech/css.webp",
	},
	{
		name: "JavaScript",
		icon: "/tech/javascript.webp",
	},
	{
		name: "TypeScript",
		icon: "/tech/typescript.webp",
	},
	{
		name: "React JS",
		icon: "/tech/reactjs.webp",
	},
	{
		name: "Next.JS",
		icon: "/tech/nextjs.svg",
	},
	{
		name: "Redux Toolkit",
		icon: "/tech/redux.webp",
	},
	{
		name: "Tailwind CSS",
		icon: "/tech/tailwind.webp",
	},
	{
		name: "Three JS",
		icon: "/tech/threejs.webp",
	},
	{
		name: "git",
		icon: "/tech/git.webp",
	},
	{
		name: "figma",
		icon: "/tech/figma.webp",
	},
	{
		name: "wordpress",
		icon: "/tech/wordpress.webp",
	},
	{
		name: "bootstrap",
		icon: "/tech/bootstrap.webp",
	},
];

const experiences = [
	{
		title: "Full-stack Developer Intern",
		company_name: "Numeric Infosystem Pvt. Ltd",
		icon: "/company/numeric.webp",
		iconBg: "#383E56",
		date: "Apr 2021 - Jan 2022",
		points: [
			"Interned at Numeric Infosystem, gaining hands-on experience in software development.",
			"Learned the MERN tech stack (MongoDB, Express, React, Node.js), enhancing full-stack development skills.",
			"Acquired proficiency in C++ and Python, strengthening programming fundamentals.",
			"Worked on a live project, applying theoretical knowledge to real-world scenarios.",
			"Developed problem-solving and collaborative skills through active participation in project development and team interactions."
		],
	},
	{
		title: "Software Engineer",
		company_name: "Mantra Labs",
		icon: "/company/mantra.webp",
		iconBg: "#E6DEDD",
		date: "July 2023 - Present",
		points: [
			"Successfully enhanced backend efficiency and maintainability in Mantra Traq by migrating to NestJS, optimizing database performance with MongoDB, and implementing secure authentication using Keycloak.",
			"Facilitated seamless communication between microservices through API gateway integration and npm workspaces, driving scalability and streamlined development workflows.",
			"Improved data processing efficiency and scalability in Validus by designing robust ETL pipelines with Pentaho and AWS Glue, automating report generation, and optimizing database performance.",
			"Ensured data security, compliance, and quality across both projects by implementing encryption, secure API practices, and rigorous validation mechanisms, maintaining user trust and data integrity."
		],
	}
	// {
	// 	title: "Software Developer",
	// 	company_name: "Way to Web Pvt. Ltd.",
	// 	icon: "/company/wtw.jpg",
	// 	iconBg: "#E6DEDD",
	// 	date: "2024 - Present",
	// 	points: [
	// 		"Developing and maintaining Wordpress Site for A.V.M Auto The Car Body Shop based in Ahmedabad, Gujarat India.",
	// 		"Analyzing feedbacks and fixing bugs.",
	// 		"Search Engine Optimization.",
	// 		"Design Maintainence and hosting maintenance.",
	// 	],
	// },
];

const testimonials = [
	// {
	// 	id: 1,
	// 	testimonial:
	// 		"Behance is a social media platform owned by Adobe whose main focus is to showcase and discover creative work.",
	// 	name: "Om Patel",
	// 	image: "/socialmedia/behance.svg",
	// 	link: "https://www.behance.net/omthecreator",
	// },
	{
		id: 2,
		testimonial:
			"LinkedIn is a business and employment-focused social media platform that works through websites and mobile apps.",
		name: "Kunal saxena",
		image: "/socialmedia/linkedin.svg",
		link: "https://www.linkedin.com/in/kunal-saxena-67a369194",
	},
	// {
	// 	id: 3,
	// 	testimonial:
	// 		"Dribbble is a self-promotion and social networking platform for digital designers and creatives. It serves as a design portfolio.",
	// 	name: "Om Patel",
	// 	image: "/socialmedia/dribble.svg",
	// 	link: "https://dribbble.com/om2121",
	// },
	// {
	// 	id: 4,
	// 	testimonial:
	// 		"Also do check out my UI/UX Portfolio where I have shared by design studies.",
	// 	name: "Om Patel",
	// 	image: "/socialmedia/portfolio.svg",
	// 	link: "https://omthecreator.netlify.app/",
	// },
	{
		id: 5,
		testimonial:
			"Also do check out my Github Profile where I have shared all my codes from basic to advanced.",
		name: "Kunal Saxena",
		image: "/tech/github.webp",
		link: "https://github.com/kunalSaxe",
	},
];


const projects :{
	name: string;
	description: string;
	tags: {
		name: string;
		color: string;
	}[];
	image: string;
	source_code_link?: string;
	deploy_link: string;
	platform: "Netlify" | "Vercel" | "Figma" | "Wordpress" | "Web"
}[] = [
	// {
	// 	name: "Project 1",
	// 	description:
	// 		"A Designed and developed a visually appealing and user-friendly portfolio website using WordPress.",
	// 	tags: [
	// 		{
	// 			name: "wordpress",
	// 			color: "blue-text-gradient",
	// 		},
	// 		{
	// 			name: "google-translate",
	// 			color: "green-text-gradient",
	// 		},
	// 	],
	// 	image: "/projectimg/avm.webp",
	// 	platform: "Wordpress",
	// 	deploy_link: "",
	// },
	// {
	// 	name: "Project 2",
	// 	description:
	// 		" Designed and developed a visually appealing and user-friendly portfolio website using Next.JS.",
	// 	tags: [
	// 		{
	// 			name: "next",
	// 			color: "red-text-gradient",
	// 		},
	// 		{
	// 			name: "Next UI",
	// 			color: "orange-text-gradient",
	// 		},
	// 		{
	// 			name: "tailwind",
	// 			color: "blue-text-gradient",
	// 		},
	// 	],
	// 	image: "/projectimg/sparkbright.png",
	// 	source_code_link: "",
	// 	platform: "Web",
	// 	deploy_link: "",
	// },
	// {
	// 	name: "Project 3",
	// 	description:
	// 		"A responsive Bank HomePage showcasing different features such as various payment gateways integration, easy money transfer, advanced security, etc. It has a beautiful interface made using Tailwind CSS and React",
	// 	tags: [
	// 		{
	// 			name: "next",
	// 			color: "green-text-gradient",
	// 		},
	// 		{
	// 			name: "tailwind",
	// 			color: "blue-text-gradient",
	// 		},
	// 	],
	// 	image: "/projectimg/hoobank.webp",
	// 	source_code_link: "",
	// 	platform: "Vercel",
	// 	deploy_link: "",
	// },
	// {
	// 	name: "Project 4",
	// 	description:
	// 		" Designed and developed a visually appealing and user-friendly Data Analytics Dashboard using MERN",
	// 	tags: [
	// 		{
	// 			name: "react",
	// 			color: "blue-text-gradient",
	// 		},
	// 		{
	// 			name: "materialui",
	// 			color: "orange-text-gradient",
	// 		},
	// 		{
	// 			name: "MongoDB",
	// 			color: "green-text-gradient",
	// 		},
	// 		{
	// 			name: "Express",
	// 			color: "pink-text-gradient",
	// 		},
	// 	],
	// 	image: "/projectimg/mern.png",
	// 	source_code_link: "",
	// 	platform: "Web",
	// 	deploy_link: "",
	// },
	// {
	// 	name: "Project 5",
	// 	description:
	// 		"A Modern UI/UX Landing Page using Framer Motion and TailwindCSS with a feel and looks of Web 3.0",
	// 	tags: [
	// 		{
	// 			name: "react",
	// 			color: "blue-text-gradient",
	// 		},
	// 		{
	// 			name: "tailwind",
	// 			color: "green-text-gradient",
	// 		},
	// 		{
	// 			name: "framer-motion",
	// 			color: "orange-text-gradient",
	// 		},
	// 	],
	// 	image: "/projectimg/metaverse.png",
	// 	source_code_link: "",
	// 	platform: "Vercel",
	// 	deploy_link: "",
	// },
	{
		name: "Stock Tracker",
		description:
			"I developed a stock management software using Next.js, NestJS, and Redis, ensuring efficient inventory tracking and real-time updates. The frontend was built with Next.js for a dynamic user experience, while NestJS powered the scalable backend. Redis was implemented for fast data caching, optimizing system performance and reliability.",
		tags: [
			{
				name: "next",
				color: "blue-text-gradient",
			},
			{
				name: "tailwind",
				color: "green-text-gradient",
			},
			{
				name: "nestjs",
				color: "orange-text-gradient",
			},
			{
				name: "mongodb",
				color: "green-text-gradient",
			},
		],
		image: "/projectimg/issuetracker.png",
		// source_code_link: "https://github.com/omunite215/Project_Issue-Tracker",
		platform: "Vercel",
		deploy_link: "",
		
	},
];

export { services, technologies, experiences, testimonials, projects };
