import { CacheProvider } from "@emotion/react";

import createCache from "@emotion/cache";
import { ThemeProvider } from "@mui/material";
import theme from "./theme.ts";

function createEmotionCache() {
  return createCache({ key: "css" });
}

export function MuiProvider({ children }: { children: React.ReactNode }) {
  const cache = createEmotionCache();

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </CacheProvider>
  );
}
