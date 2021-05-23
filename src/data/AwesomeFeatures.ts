import IconSetting from "../assets/images/icon-setting.png";
import IconResponsive from "../assets/images/icon-responsive.png";

interface AwesomeFeaturesInterface {
	number: string;
	title: string;
	text: string;
	img: string;
}

export const AwesomeFeaturesData: AwesomeFeaturesInterface[] = [
	{
		number: '',
		title: 'Easy to Manage Your All Data',
		text: "Arribo is the Best app to help you take control of your device data. Apps that have the power to transform workflows, improve client relationships, boost your productivity and organize your life.",
		img: IconSetting
	},
	{
		number: 'two',
		title: 'Responsive Design For All Devices',
		text: "Arribo was design and developed to be responsive on any device, so that you can enjoy our platform no matter where you are or what device youre using.",
		img: IconResponsive,
	}
]