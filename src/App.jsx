import Hero from "./components/hero/Hero";
import Header from "./components/header/Header";
import Footer from './components/footer/Footer';
import Categories from "./containers/featuredCategories/FeaturedCategories";
import BestSelling from "./containers/bestSelling/BestSelling";
import FeaturedBooks from "./containers/featuredBooks/FeaturedBooks";
import DealsOfWeek from "./containers/dealsOfWeek/DealsOfWeek";
import NewReleases from "./containers/newReleases/NewReleases";
import Biographies from "./containers/biographies/Biographies";
import Authors from "./containers/authors/Authors";

export default function App() {
	return (
		<>
			<Header />
            <Hero />
			<Categories />
			<BestSelling />
			<FeaturedBooks />
			<DealsOfWeek />
			<NewReleases />
			<Biographies />
			<Authors />
			<Footer />
		</>
	);
}
