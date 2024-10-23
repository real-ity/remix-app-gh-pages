import type { LoaderFunctionArgs } from '@remix-run/node';
import { useRouteError } from "@remix-run/react";
import ErrorFallback from "~/components/ErrorFallback";

export async function clientLoader({ request }: LoaderFunctionArgs) {
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