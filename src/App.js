import Header from './components/Header'
import Hero from './components/Hero'
import BookDisplay from "./components/BookDisplay";
//import Characters from './components/Characters'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'


//import book1 from "./images/safari.png";
//import book2 from "./images/grocery.png";

const description1 = "Meet Jenny Lin, a curious young girl navigating the blend of American and Chinese cultures! <br /><br /> Join her thrilling safari adventure alongside her loving parents. As she encounters captivating animals for the first time, Jenny Lin eagerly learns their English names from her dad and the Chinese names from her mom, embracing her diverse heritage.<br /><br />Experience the joy of discovery and embrace differences with Jenny Lin in this language-learning journey that celebrates multiculturalism and the wonders of the world. Come along and explore with Jenny Lin!"
const description2 = "Join Jenny Lin once again as she sets off on a brand new adventure in the vibrant aisles of an Asian American grocery store! <br /><br />With her curious eyes and growing appetite for discovery, Jenny explores colorful produce and fascinating ingredients that fill the shelves. Alongside her loving parents, she learns the English names of everyday foods from her dad and the Chinese names from her mom, deepening her connection to both cultures.<br /><br /> Celebrate language, family, and delicious traditions in this joyful exploration of identity through food. Come along and shop with Jenny Lin!"
function App() {
  return (
    <div className="max-w-5xl mx-auto px-4">
      <Header />
      <Hero />
      {/* Multiple books stacked with vertical spacing */}
      <div className="space-y-5">
        <BookDisplay
          title="safari"
          description={description1}
          amazonLink="https://www.amazon.com/Jenny-Lin-Goes-Safari-Yutong/dp/B0CQBW3F7C"
          fontColor="#1c6d73"
        />
        <BookDisplay
          title="grocery"
          description={description2}
          amazonLink="https://www.amazon.com/Jenny-Lin-Goes-Grocery-Shopping/dp/B0DD2BWC17/"
          fontColor="#7b6255"
        />
      </div>
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
