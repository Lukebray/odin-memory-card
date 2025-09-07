import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"

import MyCard from "./MyCard"

export default function BasicGrid({ pokemonCards, handleClick }) {
	return (
		<Box className="my-grid" sx={{ flexGrow: 1 }}>
			<Grid container size={{ xs: 6, sm: 4, md: 2.4 }}>
				{pokemonCards.map((pokemon) => (
					<Grid size={2.4} key={pokemon.url}>
						<MyCard
							handleClick={() => handleClick(pokemon)}
							pokemon={pokemon}
						/>
					</Grid>
				))}
			</Grid>
		</Box>
	)
}
