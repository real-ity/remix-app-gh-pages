import { Box, Stack, Typography } from "@mui/material";
import { isRouteErrorResponse } from "react-router";

import type { ErrorResponse } from "react-router";

type ErrorFallbackProps = {
  error: ErrorResponse | Error | unknown;
};

export default function ErrorFallback({ error }: ErrorFallbackProps) {
  return (
    <Box className="error-page">
      <Stack alignItems="center" justifyContent="center" spacing={2}>
        <Typography variant="h1">
          {isRouteErrorResponse(error) ? error.status : 500}
        </Typography>
        <Typography>
          {isRouteErrorResponse(error)
            ? error.data.message ?? error.data
            : error instanceof Error
            ? error.message
            : "An Unknown error ocurred"}
        </Typography>
      </Stack>
    </Box>
  );
}
