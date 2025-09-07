import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import { Button } from "@mui/material"

export default function MyCard({ pokemon, handleClick }) {
	const url = pokemon.url
	const match = url.match(/pokemon\/(\d+)\//)
	const pokemonId = match ? match[1] : null
	const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`
	return (
		<Card
			className="card"
			sx={{
				width: "100%",
				maxWidth: { xs: 200, sm: 180, md: 200 },
				height: "auto",
			}}>
			{/* <CardMedia sx={{ height: 140 }} image="../../dog.jpg" title="dog" /> */}
			<CardMedia
				sx={{ height: 120 }}
				image={imageUrl}
				title={pokemon.name}
			/>
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					{pokemon.name}
				</Typography>
				<Button variant="outlined" onClick={() => handleClick(pokemon)}>
					Select
				</Button>
			</CardContent>
		</Card>
	)
}
