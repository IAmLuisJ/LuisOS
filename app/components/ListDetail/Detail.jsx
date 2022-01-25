import * as React from 'react'
import { Compass } from 'react-feather'

import { LoadingSpinner } from '../LoadingSpinner';
import { TitleBar } from './TitleBar';

function ContentContainer(props) {
    return (
        <div
            className="mx-auto w-full max-w-3xl px-4 py-8 pb-10 md:px-8"
            {...props}
        />
    )
}

const Container = React.forwardRef((props, ref) => {
    return (
        <div
            ref={ref}
            id="main"
            className="relative flex max-h-screen w-full flex-col overflow-y-auto bg-white dark:bg-black"
            {...props}
        />
    )
}
)

function Header(props) {
    return <div className="space-y-3" {...props} />
}

const Title = React.forwardRef((props, ref) => {
    return (
        <h1
            ref={ref}
            className="text-primary font-sans text-2xl font-bold xl:text-3xl"
            {...props}
        />
    )
})

function Loading() {
    return (
        <Container>
            <div className="flex flex-1 flex-col items-center justify-center">
                <LoadingSpinner />
            </div>
        </Container>
    )
}

function Null() {
    return (
        <Container>
            <TitleBar title="Not found" />
            <div className="flex flex-1 flex-col items-center justify-center space-y-6 px-8 text-center lg:px-16">
                <Compass className="text-secondary" size={32} />
                <div className="flex flex-col space-y-1">
                    <p className="text-primary font-semibold">
                        What you seek does not exist.
                    </p>
                    <p className="text-tertiary">
                        Maybe this link is broken. Maybe something was deleted, or moved. In
                        any case, there’s nothing to see here...
                    </p>
                </div>
                <Link to="/">Go home</Link>
            </div>
        </Container>
    )
}

export const Detail = {
    Container,
    ContentContainer,
    Header,
    Title,
    Loading,
    Null,
}
