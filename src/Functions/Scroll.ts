import Scroll from 'react-scroll'

export const scrollTo = ( elId: string ) => {

	const target = document.getElementById(elId)

	Scroll.animateScroll.scrollTo( target?.offsetTop || 0 )
}

export const gotoDownload = () => {
	scrollTo('app-download-area')
}