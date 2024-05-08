import './Book.css';
import { FavoriteBorder } from "@mui/icons-material";

function Book({item}) {
	return <div className="book">
		<div className="book-img">
			<img src={item.img} alt="" />
		</div>
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
				<FavoriteBorder fontSize='small'/>
			</button>
		</div>
	</div>;
}

export default Book;
