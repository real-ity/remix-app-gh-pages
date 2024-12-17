import { ClientLoaderFunctionArgs } from "npm:react-router@^7.0.2";
import { useRouteError } from "react-router";
import ErrorFallback from "~/components/ErrorFallback.tsx";

export async function clientLoader({ request }: ClientLoaderFunctionArgs) {
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
