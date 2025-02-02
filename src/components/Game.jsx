import React from 'react'
import Board from './Board'
import { useState } from 'react'

const shuffleArray = (array) =>{

    for (let i =array.length -1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
};

const generateCards = () => {

    const values = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

    const cards = values.map((value) => ({
        value,
        isFlipped: false
    }));

    const duplicateCards =cards
    .concat([...cards])
    .map((card, index) => ({ ...card, id: index }));


   return shuffleArray(duplicateCards);
};


const Game = () => {
    const [cards, setCards] = useState(generateCards());
    const  [flippedCards, setFlippedCards] = useState([]);

    const playerChances = 6;
    const [chances, setChances] = useState(playerChances);

    const result = cards.filter((card) => card.isFlipped).length;

    const handleCardClick = (clickedCard) => {
        if (chances === 0) return;

        if (flippedCards.length === 2) return;

        const newCards = cards.map((card) => {
            return card.id === clickedCard.id ? { ...card, isFlipped: true } : card;
    });

        setCards(newCards);

        setFlippedCards([...flippedCards, clickedCard]);

        if (flippedCards.length ===1) {
            setTimeout(() => {
                const [firstCard] = flippedCards;
                
                if (firstCard.value !== clickedCard.value) {
                    const resetCards = cards.map((card) => {
                    return card.id === firstCard.id || card.id === clickedCard.id 
                            ? { ...card, isFlipped: false } 
                            : card;
                        });

                setCards(resetCards);
                setChances((prev) => prev - 1);
                }

                setFlippedCards([]);
            }, 600);
        }
    };

    const resetGame = () => {
        setCards(generateCards());
        setFlippedCards([]);
        setChances(playerChances);
    };

    return (  
    <div className="game">
        <Board cards={cards} onCardClick={handleCardClick}/>
        {chances ===0 ?(
            <p> Suas tentativas acabaram</p>
        ) : result === cards.length ? (
            <h2>Parabens, você venceu!</h2>
        ) : (<p> Tentativas restantes: {chances}</p>
        )}
        <button className ="btn" onClick={resetGame}>Reiniciar o jogo </button>;
        </div>
    );
};

export default Game



// Coder: https://www.linkedin.com/in/felipecirne/