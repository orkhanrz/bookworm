import Hero from "./components/hero/Hero";
import Header from "./components/header/Header";
import Categories from "./containers/categories/Categories";
import BestSelling from "./containers/bestSelling/BestSelling";
import FeaturedBooks from "./containers/featuredBooks/FeaturedBooks";

export default function App() {
	return (
		<>
			<Header />
            <Hero />
			<Categories />
			<BestSelling />
			<FeaturedBooks />
		</>
	);
}
