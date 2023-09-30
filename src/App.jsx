import React, {useState} from 'react';
import Card from './components/Card';
import './App.css';

const App = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [previousCardIndex, setPreviousCardIndex] = useState(null);

  const cards = [
    {front: 'Welcome to the Grand Line!', back: 'Press the NEXT button to set sail!'},
    {front: 'Who desires to become the Pirate King?', back: 'Monkey D. Luffy'},
    {front: 'Which crew member is known for using a unique three-sword style?', back: 'Roronoa Zoro'},
    {front: "Who is the Straw Hat Pirates' navigator?", back: 'Nami'},
    {front: 'Which member of the crew has dreams of becoming a Brave Warrior of the sea?', back: 'Usopp'},
    {front: 'Which crew member has dreams of finding the All Blue', back: 'Sanji'},
    {front: 'Who ate the Gomu Gomu no Mi fruit and gained the properties of rubber?', back: 'Monkey D. Luffy'},
    {front: 'Which city is known as the City of Water?', back: 'Water 7'},
    {front: 'Who leads The Red-Haired Pirates', back: 'Shanks'},
    {front: "Which revolutionary is known as Lufy's father?", back: 'Monkey D. Dragon'},
    {front: 'Which island is the homeland of Nico Robin?', back: 'Ohara'},
    {front: 'Who is the doctor of the Straw Hat Pirates?', back: 'Tony Tony Chopper'},
    {front: 'What is the name of the sword that Zoro obtained from Loguetown', back: 'Sandai Kitetsu'},
    {front: "Which former Warlord of the Sea is known as the 'Desert King'?", back: 'Sir Crocodile'},
    {front: "Who is known as the 'Surgeon of Death'?", back: 'Tragal D. Water Law'},
    {front: 'Which admiral has the power of the Magu Magu no Mi fruit and can control magma?', back: 'Admiral Akainu (Sakazuki)'},
  ]

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleNext = () => {
      setPreviousCardIndex(currentCardIndex);
      const randomIndex = getRandomCardIndex();
      setCurrentCardIndex(randomIndex);
    setIsFlipped(false);
  };

  const getRandomCardIndex = () => {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * cards.length);
    } while (randomIndex === 0 || randomIndex === previousCardIndex || randomIndex === currentCardIndex);
    return randomIndex;
  };

  return (
    <div className="App">
      <img className='header-img' src="https://i.imgur.com/KXjiwKS.png" alt="One Piece Logo" />
      <h4>Set sail on a voyage through the Grand Line of One Piece knowledge</h4>
      <h4>Number of Cards: {cards.length-1}</h4>
      <Card
        isFlipped={isFlipped}
        onFlip={handleFlip}
        front={cards[currentCardIndex].front}
        back={cards[currentCardIndex].back}
      />
      <button onClick={handleNext}>Next</button>
    </div>
  )
}

export default App;