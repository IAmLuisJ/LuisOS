import React from 'react';
import { Sidebar } from '../Sidebar'
function SiteLayout({ children }) {
    return (
        <div className="relative flex h-full min-h-screen w-full">
            <Sidebar />
            <div className="flex flex-1">{children}</div>
        </div>
    )
}

export default SiteLayout;