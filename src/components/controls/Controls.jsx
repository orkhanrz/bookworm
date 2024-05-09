import "./Controls.css";

function Controls({length, activeIndex, handleClick}) {
	return (
		<div className="hero-controls">
			{[...Array(length)].map((_, index) => {
				return (
					<div
						key={index}
						onClick={() => handleClick(index)}
						className={index === activeIndex ? "active" : ""}
					></div>
				);
			})}
		</div>
	);
}

export default Controls;
