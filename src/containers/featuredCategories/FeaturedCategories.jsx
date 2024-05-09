import "./FeaturedCategories.css";
import { useState } from "react";
import CategoryItem from "../../components/categoryItem/CategoryItem";
import {
	ArrowForwardIos,
	PhotoLibrary,
	DinnerDining,
	FavoriteBorder,
	Vaccines,
	LibraryBooks,
} from "@mui/icons-material";

function Categories() {
	const [categoryItems] = useState([
		{ id: 1, title: "Arts and Photo", icon: <PhotoLibrary className="categories-item-icon" fontSize="inherit"/> },
		{ id: 2, title: "Food and Drink", icon: <DinnerDining className="categories-item-icon" fontSize="inherit"/> },
		{ id: 3, title: "Romance", icon: <FavoriteBorder className="categories-item-icon" fontSize="inherit"/> },
		{ id: 4, title: "Health", icon: <Vaccines className="categories-item-icon" fontSize="inherit"/> },
		{ id: 5, title: "Biography", icon: <LibraryBooks className="categories-item-icon" fontSize="inherit"/> },
	]);

	return (
		<div className="categories">
			<div className="container">
				<div className="categories-content">
					<div className="categories-top">
						<h1>Featured Categories</h1>
						<a href="#">
							All Categories <ArrowForwardIos fontSize="small" />
						</a>
					</div>
					<div className="categories-items">
						{categoryItems.map(item => <CategoryItem item={item} key={item.id}/>)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Categories;
