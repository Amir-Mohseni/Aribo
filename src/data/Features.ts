
interface FeaturesDataInterface {
	number: string;
	title: string;
	text: string;
	icon: string;
}

export const FeaturesData: FeaturesDataInterface[] = [
	{
		number: '',	
		title: 'Quick Setup',
		text: 'The app is really easy to install, the complete setup process will take less than 1 minute of your time.',
		icon: 'icon-gear'
	},
	{
		number: 'two',	
		title: 'Lovely Design',
		text: 'With carefully thought-out design, Arribo looks great on any device and Easy to Use, Easy way to customize.',
		icon: 'icon-web-design'
	},
	{
		number: 'three',	
		title: 'Optimized Data',
		text: 'Speed is very important when you work with loading data, especially if you have a large number of users.',
		icon: 'icon-report'
	},
	{
		number: 'four',	
		title: 'Secure Data',
		text: 'Transfer all information with the help of SSL - a solution allowing you to save any data from the public eye.',
		icon: 'icon-list'
	},
]