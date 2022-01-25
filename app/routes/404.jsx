import * as React from 'react'

import { ListDetailView } from '../components/Layouts';
import { Detail } from "../components/ListDetail";

function MissingPage() {
    return <Detail.Null />
}

export default function Home() {
    return <ListDetailView list={null} hasDetail detail={<MissingPage />} />
}
