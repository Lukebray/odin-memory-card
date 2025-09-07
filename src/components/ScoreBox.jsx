import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"

export default function ScoreBox({ currentScore, bestScore }) {
	return (
		<Card sx={{ minWidth: 275 }}>
			<CardContent>
				<Typography
					gutterBottom
					sx={{ color: "text.secondary", fontSize: 14 }}>
					Current Score: {currentScore}
				</Typography>

				<Typography
					gutterBottom
					sx={{ color: "text.secondary", fontSize: 14 }}>
					Best Score: {bestScore}
				</Typography>
			</CardContent>
		</Card>
	)
}
