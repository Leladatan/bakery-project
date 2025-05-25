import HeroSection from "@/views/main/hero";
import ArtOfCakesSection from "@/views/main/art-of-cakes";
import TastyPancakesSection from "@/views/main/tasty-pancakes";
import BreakfastSection from "@/views/main/breakfast";
import SandwichSection from "@/views/main/sandwich";

const MainPage = () => {
    return (
        <main>
            <HeroSection/>
            <ArtOfCakesSection/>
            <TastyPancakesSection/>
            <BreakfastSection/>
            <SandwichSection/>
        </main>
    );
};

export default MainPage;