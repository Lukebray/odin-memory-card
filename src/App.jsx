import { useEffect, useState } from "react"

import "./App.css"
import Container from "@mui/material/Container"
import Header from "./components/Header"
import ScoreBox from "./components/ScoreBox"
import BasicGrid from "./components/BasicGrid"

function App() {
	const [cards, setCards] = useState([])
	const [clickedCards, setClickedCards] = useState([])
	const [currentScore, setCurrentScore] = useState(0)
	const [bestScore, setBestScore] = useState(0)

	useEffect(() => {
		const fetchData = async () => {
			const url = "https://pokeapi.co/api/v2/pokemon?limit=15"
			try {
				const response = await fetch(url)
				if (!response.ok) {
					throw new Error(`Response status: ${response.status}`)
				}

				const result = await response.json()
				setCards(result.results)
			} catch (error) {
				console.error(error.message)
			}
		}

		fetchData()
	}, [])

	const handleClick = (pokemon) => {
		if (clickedCards.includes(pokemon.name)) {
			if (currentScore > bestScore) {
				setBestScore(currentScore)
			}
			setCurrentScore(0)
			setClickedCards([])
		} else {
			setClickedCards([...clickedCards, pokemon.name])
			setCurrentScore(currentScore + 1)
		}
		setCards(shuffle(cards))
	}

	return (
		<>
			<Container>
				<Header />
				<ScoreBox currentScore={currentScore} bestScore={bestScore} />
				<BasicGrid
					pokemonCards={cards}
					handleClick={(pokemon) => handleClick(pokemon)}
				/>
			</Container>
		</>
	)
}

function shuffle(array) {
	let currentIndex = array.length

	// While there remain elements to shuffle...
	while (currentIndex != 0) {
		// Pick a remaining element...
		let randomIndex = Math.floor(Math.random() * currentIndex)
		currentIndex--

		// And swap it with the current element.
		;[array[currentIndex], array[randomIndex]] = [
			array[randomIndex],
			array[currentIndex],
		]
	}
	return array
}

export default App
