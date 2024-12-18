import type {
  LinksFunction,
  LoaderFunctionArgs
} from "react-router";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useMatches,
} from "react-router";
import { PopupLoader } from "~/components/Loading.tsx";
import Content from "~/sections/Layout.tsx";
import { getMuiLinks, MuiDocument, MuiMeta } from "~/theme";

type SerializeFrom<T> = ReturnType<typeof useLoaderData<T>>;

export const links: LinksFunction = () => [...getMuiLinks()];

export const useRootLoaderData = () => {
  const [root] = useMatches();
  return root?.data as SerializeFrom<typeof clientLoader>;
};

export async function clientLoader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  return { url };
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <MuiMeta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  const data = useLoaderData<typeof clientLoader>();

  return (
    <MuiDocument>
      <Content {...data}>
        <Outlet />
      </Content>
    </MuiDocument>
  );
}

export function HydrateFallback() {
  const data = useRootLoaderData();

  return (
    <MuiDocument>
      <Content {...data}>
        <PopupLoader />
      </Content>
    </MuiDocument>
  );
}
