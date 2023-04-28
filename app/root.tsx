import { LiveReload, Links, Outlet } from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";

import globalUrl from "~/styles/global.css";
import globalLargeUrl from "~/styles/global-large.css";
import globalMedium from "~/styles/global-medium.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: globalUrl },
  { rel: "stylesheet", href: globalLargeUrl },
  { rel: "stylesheet", href: globalMedium },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Remix: So great, it's funny!</title>
      </head>
      <body>
        <Outlet />
        <LiveReload />
        <Links />
      </body>
    </html>
  );
}