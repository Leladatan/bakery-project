import HeroSection from "@/views/main/hero";
import ArtOfCakesSection from "@/views/main/art-of-cakes";
import TastyPancakesSection from "@/views/main/tasty-pancakes";

const MainPage = () => {
    return (
        <main>
            <HeroSection/>
            <ArtOfCakesSection/>
            <TastyPancakesSection/>
        </main>
    );
};

export default MainPage;