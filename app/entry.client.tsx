import { startTransition, StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import { HydratedRouter } from "react-router/dom";
import { MuiProvider } from "~/theme/MuiProvider.tsx";

startTransition(() => {
  hydrateRoot(
    document,
    <StrictMode>
      <MuiProvider>
        <HydratedRouter />
      </MuiProvider>
    </StrictMode>,
  );
});
