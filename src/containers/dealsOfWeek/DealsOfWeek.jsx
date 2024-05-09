import "./DealsOfWeek.css";
import { useState } from "react";
import { ArrowForwardIos } from "@mui/icons-material";
import Book from "../../components/book/Book";
import Controls from '../../components/controls/Controls';

function DealsOfWeek() {
	const [activeIndex, setActiveIndex] = useState(0);
	const [books] = useState([
		{
			id: 1,
			type: "Hardcover",
			title: "Dark in Death: An Eve Dallas Novel (In Death, Book 46)",
			author: "L.J. Shen",
			price: 1.3,
			oldPrice: 1.75,
			img: "./images/book-1.jpg",
		},
		{
			id: 2,
			type: "Hardcover",
			title: "Dark in Death: An Eve Dallas Novel (In Death, Book 46)",
			author: "L.J. Shen",
			price: 1.3,
			oldPrice: 1.75,
			img: "./images/book-2.jpg",
		},
		{
			id: 3,
			type: "Hardcover",
			title: "Dark in Death: An Eve Dallas Novel (In Death, Book 46)",
			author: "L.J. Shen",
			price: 1.3,
			oldPrice: 1.75,
			img: "./images/book-3.jpg",
		},
		{
			id: 4,
			type: "Hardcover",
			title: "Dark in Death: An Eve Dallas Novel (In Death, Book 46)",
			author: "L.J. Shen",
			price: 1.3,
			oldPrice: 1.75,
			img: "./images/book-4.jpg",
		},
		{
			id: 5,
			type: "Hardcover",
			title: "Dark in Death: An Eve Dallas Novel (In Death, Book 46)",
			author: "L.J. Shen",
			price: 1.3,
			oldPrice: 1.75,
			img: "./images/book-5.jpg",
		},
		{
			id: 6,
			type: "Hardcover",
			title: "Dark in Death: An Eve Dallas Novel (In Death, Book 46)",
			author: "L.J. Shen",
			price: 1.3,
			oldPrice: 1.75,
			img: "./images/book-6.jpg",
		},
		{
			id: 7,
			type: "Hardcover",
			title: "Dark in Death: An Eve Dallas Novel (In Death, Book 46)",
			author: "L.J. Shen",
			price: 1.3,
			oldPrice: 1.75,
			img: "./images/book-7.jpg",
		},
	]);

	const handleControlClick = (index) => {
		const dealsOfWeekItemsDiv = document.querySelector('.deals-of-week-items');
		const width = dealsOfWeekItemsDiv.clientWidth * ((50 * index) / 100);
		document.querySelector('.deals-of-week-items').scroll({left: width, behavior: 'smooth'});
		setActiveIndex(index);
	};

	return (
		<div className="deals-of-week">
			<div className="container">
				<div className="deals-of-week-content">
					<div className="deals-of-week-top">
						<h1>Deals of the Week</h1>
						<a href="#">
							View All <ArrowForwardIos fontSize="small" />
						</a>
					</div>
					<div className="deals-of-week-items">
						{books.map((item) => (
							<Book item={item} key={item.id} horizontal={true} />
						))}
					</div>
					<Controls length={books.length - 1} activeIndex={activeIndex} handleClick={handleControlClick}/>
				</div>
			</div>
		</div>
	);
}

export default DealsOfWeek;
