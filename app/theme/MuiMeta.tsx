import theme from "./theme.ts";

export function MuiMeta() {
  return <meta name="theme-color" content={theme.palette.primary.main} />;
}
