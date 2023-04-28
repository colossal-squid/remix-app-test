import { Link } from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";

import stylesUrl from "~/styles/index.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
];

export default function Index() {
  return (
    <div className="container">
      <div className="content">
      <Link style={{display: "flex", margin: "auto", width: "75vw", height: "75vh"}} to="jokes">
                <img style={{ objectFit: "contain", width: "100%"}} src="/recup_logo_black_cmyk (1).png" />
              </Link>
      </div>
    </div>
  );
  }