import "./FeaturedBooks.css";
import { useState } from "react";
import Book from "../../components/book/Book";

function FeaturedBooks() {
	const [books, setBooks] = useState([
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
		{
			id: 8,
			type: "Hardcover",
			title: "Dark in Death: An Eve Dallas Novel (In Death, Book 46)",
			author: "L.J. Shen",
			price: 1.3,
			oldPrice: 1.75,
			img: "./images/book-8.jpg",
		},
		{
			id: 9,
			type: "Hardcover",
			title: "Dark in Death: An Eve Dallas Novel (In Death, Book 46)",
			author: "L.J. Shen",
			price: 1.3,
			oldPrice: 1.75,
			img: "./images/book-1.jpg",
		},
		{
			id: 10,
			type: "Hardcover",
			title: "Dark in Death: An Eve Dallas Novel (In Death, Book 46)",
			author: "L.J. Shen",
			price: 1.3,
			oldPrice: 1.75,
			img: "./images/book-2.jpg",
		},
		{
			id: 11,
			type: "Hardcover",
			title: "Dark in Death: An Eve Dallas Novel (In Death, Book 46)",
			author: "L.J. Shen",
			price: 1.3,
			oldPrice: 1.75,
			img: "./images/book-3.jpg",
		},
		{
			id: 12,
			type: "Hardcover",
			title: "Dark in Death: An Eve Dallas Novel (In Death, Book 46)",
			author: "L.J. Shen",
			price: 1.3,
			oldPrice: 1.75,
			img: "./images/book-4.jpg",
		},
	]);

	return (
		<div className="featured-books">
			<div className="container">
				<div className="featured-books-content">
					<div className="featured-books-top">
						<h1 className="featured-books-title">Featured Books</h1>
						<div className="featured-books-categories">
							<a href="#" className="active">
								Featured
							</a>
							<a href="#">On Sale</a>
							<a href="#">Most Viewed</a>
						</div>
					</div>
					<div className="featured-books-items">
						{books.map((item) => {
							return <Book item={item} key={item.id} />;
						})}
					</div>
				</div>
			</div>
		</div>
	);
}

export default FeaturedBooks;
