import './Error.css';
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

export default function Error() {
	return (
		<>
			<Header />
			<div className="error">
				<div className="container">
					<div className="error-content">
						<h1>404</h1>
						<h3>Woops, looks like this page does not exist</h3>
						<p>You could either go back or go to homepage</p>
                        <button>Go Back</button>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}
