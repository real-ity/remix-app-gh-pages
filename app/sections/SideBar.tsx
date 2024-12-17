import { Box, Link as MuiLink, Typography } from "@mui/material";
import { Link } from "react-router";

export default function SideBar() {
  return (
    <Box component="nav" justifyContent="center">
      <MuiLink component={Link} to="/">
        <Typography variant="h3" gutterBottom>
          Remix SPA
        </Typography>
      </MuiLink>
    </Box>
  );
}
