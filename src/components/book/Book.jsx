import "./Book.css";
import { Link } from "react-router-dom";
import { FavoriteBorder } from "@mui/icons-material";

function Book({ item, horizontal }) {
	return (
		<Link to={'/books/' + item.id} className={`book ${horizontal ? "horizontal" : ""}`}>
			<div className="book-img">
				<img src={item.img} alt="" />
			</div>
			<div className="book-details">
				<div className="book-info">
					<h3>{item.type}</h3>
					<h4>{item.title}</h4>
					<span>{item.author}</span>
					<p>
						{item.price}$ <span>${item.oldPrice}</span>
					</p>
				</div>
				<div className="book-controls">
					<button className="book-btn">Add to Cart</button>
					<button className="book-heart-btn">
						<FavoriteBorder fontSize="small" />
					</button>
				</div>
			</div>
		</Link>
	);
}

export default Book;
