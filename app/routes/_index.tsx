import { Box, Link, List, Typography } from "@mui/material";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => [
  { title: "New Remix SPA" },
  { name: "description", content: "Welcome to Remix (SPA Mode)!" },
];

export default function Index() {
  return (
    <Box style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <Typography variant="h2">Welcome to Remix (SPA Mode)</Typography>
      <List>
        <li>
          <Link
            variant="h5"
            target="_blank"
            href="https://remix.run/future/spa-mode"
            rel="noreferrer"
          >
            SPA Mode Guide
          </Link>
        </li>
        <li>
          <Link
            variant="h5"
            target="_blank"
            href="https://remix.run/docs"
            rel="noreferrer"
          >
            Remix Docs
          </Link>
        </li>
      </List>
    </Box>
  );
}
