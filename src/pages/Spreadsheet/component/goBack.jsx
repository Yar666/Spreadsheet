import { Box } from "@mui/material"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import { Link, useParams } from "react-router-dom"

export const GoBackArrow = () => {
  const { id } = useParams()
  return (
    <Box style={{ position: "absolute" }}>
      <Link to={`/Home_page/${id}/ANALYTICS`}>
        <ArrowBackIcon className="ExitIco" />
      </Link>
    </Box>
  )
}
