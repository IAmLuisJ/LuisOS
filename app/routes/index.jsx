import React from "react";
import Intro from "../components/Intro";
import ListDetailView from "../components/Layouts/ListDetailView";
import appStyles from '../styles/app.css';

export const links = () => {
  return [{ rel: "stylesheet", href: appStyles }]
}

export default function Index() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <h1>Welcome to LuisOS!</h1>
      <ListDetailView list={null} hasDetail detail={<Intro />} />
    </div>
  )
}