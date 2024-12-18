import { useRouteError } from "react-router";
import ErrorFallback from "~/components/ErrorFallback.tsx";

import { Route } from "../../.react-router/types/app/routes/+types/$.ts";

export async function clientLoader({ request }: Route.ClientLoaderArgs) {
  throw new Response(`${new URL(request.url).pathname} Not Found`, {
    status: 404,
  });
}
export default function CatchAllPage() {
  return null;
}
export function ErrorBoundary() {
  const error = useRouteError();
  return <ErrorFallback {...{ error }} />;
}
