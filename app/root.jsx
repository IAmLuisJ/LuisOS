import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "remix";
import styles from "./styles/app.css";
import customStyles from './styles/custom-styles.css';
import proseStyles from './styles/prose-styles.css';
import darkStyles from './styles/dracula.css';

import SiteLayout from './components/Layouts/SiteLayout'

export function meta() {
  return { title: "LuisOS" };
}

export function links() {
  return [
    { rel: "stylesheet", href: styles },
    { rel: "stylesheet", href: darkStyles, media: '(prefers-color-scheme: dark)' }
  ]
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <SiteLayout>
          <Outlet />
        </SiteLayout>
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
