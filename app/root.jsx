import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "remix";
import styles from "./styles/app.css"
import SiteLayout from './components/Layouts/SiteLayout'

export function meta() {
  return { title: "LuisOS" };
}

export function links() {
  return [{ rel: "stylesheet", href: styles }]
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
        <span className="text-tertiary absolute flex -translate-y-full transform space-x-1 border-b border-gray-150 bg-white p-2 focus-within:relative focus-within:translate-y-0 dark:border-gray-800 dark:bg-gray-900">
          <a className="text-primary font-semibold" href="#main">
            Skip to content
          </a>
          <span>(if available)</span>
          <span>or</span>
          <a className="text-primary font-semibold" href="#list">
            jump to list
          </a>
          <span>(if available)</span>
        </span>
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
