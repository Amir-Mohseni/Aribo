import Carousel from 'react-multi-carousel';

export const CarouselArrows = ({ carousel }: { carousel: Carousel | null }) => (
	<div className="carousel-arrows">
		<div
			className="carousel-prev"
			onClick={() => carousel?.previous(1)}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					d="M10 19l-7-7m0 0l7-7m-7 7h18"
				/>
			</svg>
		</div>

		<div className="carousel-next" onClick={() => carousel?.next(1)}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					d="M14 5l7 7m0 0l-7 7m7-7H3"
				/>
			</svg>
		</div>
	</div>
)

export const carouselSettings = {
	additionalTransfrom: 0,
	arrows: false,
	autoPlaySpeed: 3000,
	centerMode: false,
	className: "family-carousel",
	containerClass: "container-with-dots",
	dotListClass: "",
	draggable: true,
	focusOnSelect: false,
	infinite: true,
	itemClass: "",
	keyBoardControl: true,
	minimumTouchDrag: 80,
	renderButtonGroupOutside: false,
	renderDotsOutside: false,
	responsive: {
    desktop: {
      breakpoint: { max: 200000, min: 1200 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 1200, min: 0 },
      items: 1,
    },
  },
	showDots: false,
	sliderClass: "",
	slidesToSlide: 1,
	swipeable: true
}
