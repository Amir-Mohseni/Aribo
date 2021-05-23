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
		text: 'Installation was pretty easy.We have been Arribo customers for years, and we have had nothing but amazing experiences with the Arribo and well-designed mobile app. Arribo provided that for us with easy-to-use software and personalized support. I like this app. Thank you.',
		position: 1,
		from: 'Digilite Web Solutions',
		img: Client1,
		active: true
	},
	{
		name: 'Fatih Senel',
		text: 'Installation was pretty easy.We have been Arribo customers for years, and we have had nothing but amazing experiences with the Arribo and well-designed mobile app. Arribo provided that for us with easy-to-use software and personalized support. I like this app. Thank you.',
		position: 2,
		from: 'Digilite Web Solutions',
		img: Client7,
		active: false
	},
	{
		name: 'Fatih Senel',
		text: 'Installation was pretty easy.We have been Arribo customers for years, and we have had nothing but amazing experiences with the Arribo and well-designed mobile app. Arribo provided that for us with easy-to-use software and personalized support. I like this app. Thank you.',
		position: 3,
		from: 'Digilite Web Solutions',
		img: Client3,
		active: false
	},
	{
		name: 'Fatih Senel',
		text: 'Installation was pretty easy.We have been Arribo customers for years, and we have had nothing but amazing experiences with the Arribo and well-designed mobile app. Arribo provided that for us with easy-to-use software and personalized support. I like this app. Thank you.',
		position: 4,
		from: 'Digilite Web Solutions',
		img: Client6,
		active: false
	},
	{
		name: 'Fatih Senel',
		text: 'Installation was pretty easy.We have been Arribo customers for years, and we have had nothing but amazing experiences with the Arribo and well-designed mobile app. Arribo provided that for us with easy-to-use software and personalized support. I like this app. Thank you.',
		position: 5,
		from: 'Digilite Web Solutions',
		img: Client4,
		active: false
	},
	{
		name: 'Fatih Senel',
		text: 'Installation was pretty easy.We have been Arribo customers for years, and we have had nothing but amazing experiences with the Arribo and well-designed mobile app. Arribo provided that for us with easy-to-use software and personalized support. I like this app. Thank you.',
		position: 6,
		from: 'Digilite Web Solutions',
		img: Client5,
		active: false
	},
	{
		name: 'Fatih Senel',
		text: 'Installation was pretty easy.We have been Arribo customers for years, and we have had nothing but amazing experiences with the Arribo and well-designed mobile app. Arribo provided that for us with easy-to-use software and personalized support. I like this app. Thank you.',
		position: 7,
		from: 'Digilite Web Solutions',
		img: Client2,
		active: false
	},
]