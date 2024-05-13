import "./Newsletter.css";

function Newsletter() {
	return (
		<div className="newsletter">
			<div className="newsletter-content">
				<h1>Join Our Newsletter</h1>
				<p>Signup to be the first to hear about exclusive deals, special offers and upcoming collections</p>
				<div className="newsletter-input">
					<input type="text" placeholder="Enter email for weekly newsletter." />
					<button className="btn">Subscribe</button>
				</div>
			</div>
		</div>
	);
}

export default Newsletter;
