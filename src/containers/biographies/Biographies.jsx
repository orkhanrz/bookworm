import "./Biographies.css";
import { useState } from "react";
import { ArrowForwardIos } from "@mui/icons-material";
import Book from '../../components/book/Book';

function Biographies() {
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

	return (
		<div className="biographies">
			<div className="container">
				<div className="biographies-content">
					<div className="biographies-top">
						<h1>Biographies Books</h1>
						<a href="#">
							View All <ArrowForwardIos fontSize="small" />
						</a>
					</div>
					<div className="biographies-items">
						{books.map((item) => (
							<Book horizontal={true} item={item} key={item.id} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Biographies;
