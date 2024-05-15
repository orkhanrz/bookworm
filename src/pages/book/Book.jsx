import "./Book.css";
import { useState } from "react";
import { FavoriteBorder, ShareOutlined } from "@mui/icons-material";
import Controls from "../../components/controls/Controls";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ProductDetails from "../../components/productDetails/ProductDetails";
import ProductDesc from "../../components/productDesc/ProductDesc";
import ProductVideos from "../../components/productVideos/ProductVideos";

export default function Book() {
	const [activeIndex, setActiveIndex] = useState(0);
	const [activeCategory, setActiveCategory] = useState("description");
	const book = {
		id: 1,
		title: "Next Level Basic: The Definitive Basic Bitch Handbook",
		author: "Stassi Schroeder",
		price: 4.72,
		oldPrice: 9.99,
		img: "https://bookworm.madrasthemes.com/wp-content/uploads/2020/08/37-300x444.jpg",
		shortDesc:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat.",
		longDesc: `
            We aim to show you accurate product information. Manufacturers, suppliers and others provide what you see here, and we have not verified it. See our disclaimer

            #1 New York Times Bestseller
            
            A Reese Witherspoon x Hello Sunshine Book Club Pick
            
            “I can’t even express how much I love this book! I didn’t want this story to end!”–Reese Witherspoon
            
            “Painfully beautiful.”–The New York Times Book Review
            
            “Perfect for fans of Barbara Kingsolver.”–Bustle
            
            For years, rumors of the “Marsh Girl” have haunted Barkley Cove, a quiet town on the North Carolina coast. So in late 1969, when handsome Chase Andrews is found dead, the locals immediately suspect Kya Clark, the so-called Marsh Girl. But Kya is not what they say. Sensitive and intelligent, she has survived for years alone in the marsh that she calls home, finding friends in the gulls and lessons in the sand. Then the time comes when she yearns to be touched and loved. When two young men from town become intrigued by her wild beauty, Kya opens herself to a new life–until the unthinkable happens.
            
            Perfect for fans of Barbara Kingsolver and Karen Russell, Where the Crawdads Sing is at once an exquisite ode to the natural world, a heartbreaking coming-of-age story, and a surprising tale of possible murder. Owens reminds us that we are forever shaped by the children we once were, and that we are all subject to the beautiful and violent secrets that nature keeps
            
            WHERE THE CRAWDADS LP
        `,
		categories: ["Arts & Literature", "Health"],
		format: "Kindle",
		videos: [
			{
				img: "https://bookworm.madrasthemes.com/wp-content/uploads/2020/08/img1.jpg",
				title: "Where The Crawdads Sing Overview",
				author: "Solomon",
				rating: 1.45,
			},
			{
				img: "https://bookworm.madrasthemes.com/wp-content/uploads/2020/08/img2.jpg",
				title: "Where The Crawdads Sing Overview",
				author: "Solomon",
				rating: 2.21,
			},
		],
	};

	const handleControlClick = (index) => {
		setActiveIndex(index);
	};

	const ActiveComponent = () => {
		if (activeCategory === "description") {
			return <ProductDesc desc={book.longDesc} />;
		} else if (activeCategory === "details") {
			return <ProductDetails book={book} />;
		} else {
			return <ProductVideos videos={book.videos} />;
		}
	};

	return (
		<>
			<Header />
			<div className="book-page">
				<div className="container">
					<div className="book-page-content">
						<div className="book-page-left">
							<div className="book-page-top">
								<div className="book-page-top-left">
									<div className="book-page-img">
										<img src={book.img} alt="" />
										{book.oldPrice ? (
											<div className="book-save-price">
												<span>save</span>
												<p>${(book.oldPrice - book.price).toFixed(2)}</p>
											</div>
										) : (
											""
										)}
									</div>
									<Controls length={2} activeIndex={activeIndex} handleClick={handleControlClick} />
								</div>
								<div className="book-page-top-right">
									<h1 className="book-page-title">
										{book.title}
									</h1>
									<h2 className="book-page-author">
										By (author) <span>{book.author}</span>
									</h2>
									<h3 className="book-page-price">
										${book.price} <span>${book.oldPrice}</span>
									</h3>
									<p className="book-page-desc">
										{book.shortDesc}
									</p>
									<div className="book-page-cart-actions">
										<div className="book-page-input">
											<button>-</button>
											<input type="number" value={1} />
											<button>+</button>
										</div>
										<button>Add to cart</button>
									</div>
									<div className="book-page-user-actions">
										<button>
											<span>
												<FavoriteBorder />
											</span>
											Add to wishlist
										</button>
										<button>
											<span>
												<ShareOutlined />
											</span>
											Share
										</button>
									</div>
								</div>
							</div>
							<div className="book-page-bottom">
								<div className="book-page-bottom-left">
									<button
										className={activeCategory === "description" ? "active" : ""}
										onClick={() => setActiveCategory("description")}
									>
										Description
									</button>
									<button
										className={activeCategory === "details" ? "active" : ""}
										onClick={() => setActiveCategory("details")}
									>
										Product Details
									</button>
									<button
										className={activeCategory === "videos" ? "active" : ""}
										onClick={() => setActiveCategory("videos")}
									>
										Videos
									</button>
								</div>
								<div className="book-page-bottom-right">{<ActiveComponent />}</div>
							</div>
						</div>
						<aside className="book-page-aside">
                            <div className="book-recommendations">
                                <div className="book-recommendation-item">
                                    <img src="https://bookworm.madrasthemes.com/wp-content/uploads/2020/08/10-150x200.jpg" alt="" />
                                    <div className="book-recommendation-item-right">
                                        <h3>Blindside (Michael Bennett Book 12)</h3>
                                        <p>$15.99</p>
                                    </div>
                                </div>
                                <div className="book-recommendation-item">
                                    <img src="https://bookworm.madrasthemes.com/wp-content/uploads/2020/08/10-150x200.jpg" alt="" />
                                    <div className="book-recommendation-item-right">
                                        <h3>Blindside (Michael Bennett Book 12)</h3>
                                        <p>$15.99</p>
                                    </div>
                                </div>
                                <div className="book-recommendation-item">
                                    <img src="https://bookworm.madrasthemes.com/wp-content/uploads/2020/08/10-150x200.jpg" alt="" />
                                    <div className="book-recommendation-item-right">
                                        <h3>Blindside (Michael Bennett Book 12)</h3>
                                        <p>$15.99</p>
                                    </div>
                                </div>
                            </div>
                        </aside>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}
