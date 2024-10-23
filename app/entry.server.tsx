import type { EntryContext } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import { renderToString } from "react-dom/server";
import { MuiProvider } from "~/theme";

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext,
) {
  let html = renderToString(
    <MuiProvider>
      <RemixServer context={remixContext} url={request.url} />
    </MuiProvider>,
  );
  html = "<!DOCTYPE html>\n" + html;
  return new Response(html, {
    headers: { "Content-Type": "text/html" },
    status: responseStatusCode,
  });
}

// need to add bot request handler