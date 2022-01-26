import React from 'react';

import {
    AMAIcon,
    AppDissectionIcon,
    BookmarksIcon,
    ExternalLinkIcon,
    FigmaIcon,
    GitHubIcon,
    HackerNewsIcon,
    HomeIcon,
    PodcastIcon,
    SecurityChecklistIcon,
    StackIcon,
    StaffDesignIcon,
    TwitterIcon,
    WritingIcon,
} from "../Icon"
import { NavigationLink } from './NavigationLink';

export function SidebarNavigation() {

    const links = [
        {
            href: '/',
            label: 'Home',
            icon: HomeIcon,
            trailingAccessory: null,
            isActive: true,
            trailingAction: null,
            isExternal: false,
        },

        {
            href: '/writing',
            label: 'Writing',
            icon: WritingIcon,
            trailingAccessory: null,
            isActive: false,
            trailingAction: null,
            isExternal: false,
        },

        'Me',

        {
            href: '/bookmarks',
            label: 'Bookmarks',
            icon: BookmarksIcon,
            trailingAccessory: null,
            isActive: false,
            trailingAction: null,
            isExternal: false,
        },

        {
            href: '/ama',
            label: 'AMA',
            icon: AMAIcon,
            trailingAccessory: null,
            isActive: false,
            trailingAction: null,
            isExternal: false,
        },

        {
            href: '/stack',
            label: 'Stack',
            icon: StackIcon,
            trailingAccessory: null,
            isActive: false,
            trailingAction: null,
            isExternal: false,
        },

        'Projects',

        {
            href: 'https://designdetails.fm',
            label: 'Design Details',
            icon: PodcastIcon,
            trailingAccessory: ExternalLinkIcon,
            isActive: false,
            trailingAction: null,
            isExternal: true,
        },

        {
            href: 'https://staff.design',
            label: 'Staff Design',
            icon: StaffDesignIcon,
            trailingAccessory: ExternalLinkIcon,
            isActive: false,
            trailingAction: null,
            isExternal: true,
        },

        {
            href: 'https://figma.com/@brian',
            label: 'Figma Plugins',
            icon: FigmaIcon,
            trailingAccessory: ExternalLinkIcon,
            isActive: false,
            trailingAction: null,
            isExternal: true,
        },

        {
            href: '/security',
            label: 'Security Checklist',
            icon: SecurityChecklistIcon,
            trailingAccessory: null,
            isActive: false,
            trailingAction: null,
            isExternal: false,
        },

        {
            href: '/hn',
            label: 'Hacker News',
            icon: HackerNewsIcon,
            trailingAccessory: null,
            isActive: false,
            trailingAction: null,
            isExternal: false,
        },

        {
            href: '/app-dissection',
            label: 'App Dissection',
            icon: AppDissectionIcon,
            trailingAccessory: null,
            isActive: false,
            trailingAction: null,
            isExternal: false,
        },

        'Online',

        {
            href: 'https://twitter.com/helloluisj',
            label: 'Twitter',
            icon: TwitterIcon,
            trailingAccessory: ExternalLinkIcon,
            isActive: false,
            trailingAction: null,
            isExternal: true,
        },

        {
            href: 'https://github.com/iAmLuisJ',
            label: 'GitHub',
            icon: GitHubIcon,
            trailingAccessory: ExternalLinkIcon,
            isActive: false,
            trailingAction: null,
            isExternal: true,
        },
    ]

    return (
        <ul className="flex-1 space-y-1 px-3 py-3">
            {links.map((link, i) => {
                if (typeof link === 'string') {
                    return (
                        <h4
                            key={i}
                            className="px-2 pt-5 pb-2 text-xs font-semibold text-gray-1000 text-opacity-40 dark:text-white"
                        >
                            {link}
                        </h4>
                    )
                }

                return <NavigationLink key={i} link={link} />
            })}
        </ul>
    )
}