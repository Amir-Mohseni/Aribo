import Client1 from '../assets/images/client-1.jpg'
import Client2 from '../assets/images/client-2.jpg'
import Client3 from '../assets/images/client-3.jpg'
import Client4 from '../assets/images/client-4.jpg'
import Client5 from '../assets/images/client-5.jpg'
import Client6 from '../assets/images/client-6.jpg'
import Client7 from '../assets/images/client-7.jpg'

export interface TestimonialsInterface {
	name: string;
	text: string;
	position: number;
	from: string;
	img: typeof Client1,
	active: boolean;
}

export const readyTestimonials: TestimonialsInterface[] = [
	{
		name: 'Fatih Senel',
		text: 'Installation was pretty easy .We have been Arribo customers for years, and we have had nothing but amazing experiences with Arribo and its well-designed mobile app. Arribo provided that for us with easy-to-use software and personalized support.',
		position: 1,
		from: 'Digilite Web Solutions',
		img: Client1,
		active: true
	},
	{
		name: 'Scott Brown',
		text: 'The biggest differentiator was that Arribo had more end-to-end flow - from registration to website development to day of attendee management and interactive features, all the way into reporting - all seamlessly integrated.',
		position: 2,
		from: 'Vice President, Marketing',
		img: Client7,
		active: false
	},
	{
		name: 'Brittany Vogel',
		text: 'Data analytics was the feature that helped us pick Arribo because we could do so much within the platform in real-time.',
		position: 3,
		from: 'Vice President, Global Events',
		img: Client3,
		active: false
	},
	{
		name: 'Amy Herman',
		text: 'Arribo allowed us to cut the event administration process down by giving us more control to manage changes in real-time to sessions, speakers, or agendas. That is a powerful addition to our process.',
		position: 4,
		from: 'Digilite Web Solutions',
		img: Client6,
		active: false
	},
	{
		name: 'Lauren Sommers',
		text: "From someone who has seen a lot of different platforms over the course of 15 years of running events, Arribo is by far the most intuitive platform that I've ever used.",
		position: 5,
		from: 'VP Corporate Events',
		img: Client4,
		active: false
	},
	{
		name: 'Phillip Basil-Jones',
		text: 'Using Arribo, we were able to successfully increase attendee engagement, helping us to create an interactive and impactful event experience.',
		position: 6,
		from: 'National Digital & Online Comm. Admin',
		img: Client5,
		active: false
	},
	{
		name: 'Mike Benjumea',
		text: "Using the Arribo marketing tool truly streamlined our communication with attendees it's so easy to use. We just love it.",
		position: 7,
		from: ' Marketing Communications Manager',
		img: Client2,
		active: false
	},
]