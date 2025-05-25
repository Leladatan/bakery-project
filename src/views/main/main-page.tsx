import HeroSection from "@/views/main/hero";
import ArtOfCakesSection from "@/views/main/art-of-cakes";
import TastyPancakesSection from "@/views/main/tasty-pancakes";
import SandwichSection from "@/views/main/sandwich";

const MainPage = () => {
    return (
        <main>
            <HeroSection/>
            <ArtOfCakesSection/>
            <TastyPancakesSection/>
            <SandwichSection/>
        </main>
    );
};

export default MainPage;