import "./Hero.css";
import { useEffect, useState } from "react";
import Controls from '../controls/Controls';

function Featured() {
	const [activeElement, setActiveElement] = useState(false);
	const [activeIndex, setActiveIndex] = useState(0);
	const [featured] = useState([
		{
			id: 1,
			subTitle: "The Bookworm Editors'",
			title: "Featured Books of the February",
			image: "./images/featured.png",
		},
		{
			id: 2,
			subTitle: "The Bookworm Editors'",
			title: "Featured Books of the March",
			image: "./images/featured-2.png",
		},
		{
			id: 3,
			subTitle: "The Bookworm Editors'",
			title: "Featured Books of the April",
			image: "./images/featured-3.png",
		},
		{
			id: 4,
			subTitle: "The Bookworm Editors'",
			title: "Featured Books of the June",
			image: "./images/featured-4.png",
		},
	]);

	useEffect(() => {
		setActiveElement(false);

		setTimeout(() => {
			setActiveElement(true);
		}, 750);
	}, [activeIndex]);

	const handleControlClick = (index) => {
		setActiveIndex(index);
	};

	const formatTitle = (string) => {
		const stringArr = string.split(" ");
		const lastWord = stringArr.pop();
		const restWords = stringArr.join(" ");

		return (
			<>
				{restWords} <span>{lastWord}</span>
			</>
		);
	};

	return (
		<div className="hero">
			<div className={`hero-top ${activeElement ? "active" : ""}`}>
				<div className="hero-top-left">
					<h3>{featured[activeIndex].subTitle}</h3>
					<h1>{formatTitle(featured[activeIndex].title)}</h1>
					<a href="#">See more</a>
				</div>
				<div className="hero-top-right">
					<img src={featured[activeIndex].image} alt="" />
				</div>
			</div>
			<Controls length={featured.length} activeIndex={activeIndex} handleClick={handleControlClick} />
		</div>
	);
}

export default Featured;
