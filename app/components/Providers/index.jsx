import React from 'react';

const globalNavigationContext = {
    isOpen: false,
    setIsOpen: (val) => { },
}

export const GlobalNavigationContext = React.createContext(
    globalNavigationContext
)

export function Providers({ children, pageProps }) {

    const initialState = {
        isOpen: false,
        setIsOpen,
    }

    const [state, setState] = React.useState(initialState)

    function setIsOpen(isOpen) {
        return setState({ ...state, isOpen })
    }

    return (
        <>
            <GlobalNavigationContext.Provider value={state}>
                {children}
            </GlobalNavigationContext.Provider>
        </>
    )
}