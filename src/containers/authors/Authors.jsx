import "./Authors.css";
import { ArrowForwardIos, ChevronLeft, ChevronRight } from "@mui/icons-material";

function Authors() {
	function scrollAuthors(direction) {
        const authorItems = document.querySelector('.author-items');
        let width = authorItems.clientWidth * (20 / 100);
        width = direction === 'left' ? -width : width;

        authorItems.scrollBy({ left: width, behavior: 'smooth' });
    }

	return (
		<div className="authors">
			<div className="container">
				<div className="authors-content">
					<div className="authors-top">
						<h1>Favorite Authors</h1>
						<a href="#">
							View All <ArrowForwardIos fontSize="small" />
						</a>
					</div>
					<div className="author-items">
						<div className="author-item">
							<div className="author-img">
								<img src="./images/pikachu.jpg" alt="" />
							</div>
							<h3>A G Riddle</h3>
							<p>3 Published Books</p>
						</div>
						<div className="author-item">
							<div className="author-img">
								<img src="./images/pikachu.jpg" alt="" />
							</div>
							<h3>A G Riddle</h3>
							<p>3 Published Books</p>
						</div>
						<div className="author-item">
							<div className="author-img">
								<img src="./images/pikachu.jpg" alt="" />
							</div>
							<h3>A G Riddle</h3>
							<p>3 Published Books</p>
						</div>
						<div className="author-item">
							<div className="author-img">
								<img src="./images/pikachu.jpg" alt="" />
							</div>
							<h3>A G Riddle</h3>
							<p>3 Published Books</p>
						</div>
						<div className="author-item">
							<div className="author-img">
								<img src="./images/pikachu.jpg" alt="" />
							</div>
							<h3>A G Riddle</h3>
							<p>3 Published Books</p>
						</div>
						<div className="author-item">
							<div className="author-img">
								<img src="./images/pikachu.jpg" alt="" />
							</div>
							<h3>A G Riddle</h3>
							<p>3 Published Books</p>
						</div>
						<div className="author-item">
							<div className="author-img">
								<img src="./images/pikachu.jpg" alt="" />
							</div>
							<h3>A G Riddle</h3>
							<p>3 Published Books</p>
						</div>
					</div>
					<div className="author-controls">
						<button className="left" onClick={() => scrollAuthors("left")}>
							<ChevronLeft fontSize="medium" />
						</button>
						<button className="right" onClick={() => scrollAuthors("right")}>
							<ChevronRight fontSize="medium" />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Authors;
