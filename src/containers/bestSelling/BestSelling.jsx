import "./BestSelling.css";
import { useState } from "react";
import { ArrowForwardIos } from "@mui/icons-material";
import Book from '../../components/book/Book';

function BestSelling() {
	const [bestSellingItems, setBestSellingItems] = useState([
		{
			id: 1,
			type: "Hardcover",
			title: "Dark in Death: An Eve Dallas Novel (In Death, Book 46)",
			author: "L.J. Shen",
			price: 1.30,
			oldPrice: 1.75,
			img: "./images/book-1.jpg",
		},
		{
			id: 2,
			type: "Hardcover",
			title: "Dark in Death: An Eve Dallas Novel (In Death, Book 46)",
			author: "L.J. Shen",
			price: 1.30,
			oldPrice: 1.75,
			img: "./images/book-2.jpg",
		},
		{
			id: 3,
			type: "Hardcover",
			title: "Dark in Death: An Eve Dallas Novel (In Death, Book 46)",
			author: "L.J. Shen",
			price: 1.30,
			oldPrice: 1.75,
			img: "./images/book-3.jpg",
		},
		{
			id: 4,
			type: "Hardcover",
			title: "Dark in Death: An Eve Dallas Novel (In Death, Book 46)",
			author: "L.J. Shen",
			price: 1.30,
			oldPrice: 1.75,
			img: "./images/book-4.jpg",
		},
		{
			id: 5,
			type: "Hardcover",
			title: "Dark in Death: An Eve Dallas Novel (In Death, Book 46)",
			author: "L.J. Shen",
			price: 1.30,
			oldPrice: 1.75,
			img: "./images/book-5.jpg",
		},
		{
			id: 6,
			type: "Hardcover",
			title: "Dark in Death: An Eve Dallas Novel (In Death, Book 46)",
			author: "L.J. Shen",
			price: 1.30,
			oldPrice: 1.75,
			img: "./images/book-6.jpg",
		},
		{
			id: 7,
			type: "Hardcover",
			title: "Dark in Death: An Eve Dallas Novel (In Death, Book 46)",
			author: "L.J. Shen",
			price: 1.30,
			oldPrice: 1.75,
			img: "./images/book-7.jpg",
		},
		{
			id: 8,
			type: "Hardcover",
			title: "Dark in Death: An Eve Dallas Novel (In Death, Book 46)",
			author: "L.J. Shen",
			price: 1.30,
			oldPrice: 1.75,
			img: "./images/book-8.jpg",
		},
	]);

	return (
		<div className="best-selling">
			<div className="container">
				<div className="best-selling-content">
					<div className="best-selling-top">
						<h1>Bestselling Books</h1>
						<a href="#">
							View All <ArrowForwardIos fontSize="small" />
						</a>
					</div>
					<div className="best-selling-items">
						{bestSellingItems.map((item) => {
							return <Book item={item} key={item.id}/>
						})}
					</div>
				</div>
			</div>
		</div>
	);
}

export default BestSelling;
