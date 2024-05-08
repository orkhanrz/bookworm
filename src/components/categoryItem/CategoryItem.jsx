import "./CategoryItem.css";

function CategoryItem({item}) {
	return (
		<div className="categories-item" id={item.id}>
			{item.icon}
			<h3>{item.title}</h3>
			<button>Shop Now</button>
		</div>
	);
}

export default CategoryItem;
