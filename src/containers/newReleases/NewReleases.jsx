import './NewReleases.css';
import { useState } from 'react';
import Book from '../../components/book/Book';

function NewReleases() {
	const [books, setBooks] = useState([
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
		}
	]);

	return (
		<div className="new-releases">
			<div className="container">
				<div className="new-releases-content">
					<div className="new-releases-top">
						<h1 className="new-releases-title">New Releases</h1>
						<div className="new-releases-categories">
							<a href="#" className="active">
								History
							</a>
							<a href="#">Science and Math</a>
							<a href="#">Romance</a>
							<a href="#">Travel</a>
						</div>
					</div>
                    <div className="new-releases-items">
                        <div className="new-releases-left">
							<div className="new-releases-left-img">
								<img src="./images/new-releases-left.png" alt="" />
							</div>
							<h2>Get Extra</h2>
							<h1>Sale -25%</h1>
							<h3>On Order Over $100</h3>
							<a href='#'>View More</a>
						</div>
                        <div className="new-releases-right">
							{books.map(item => <Book item={item} key={item.id}/>)}
						</div>
                    </div>
				</div>
			</div>
		</div>
	);
}

export default NewReleases;
