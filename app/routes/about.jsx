import React from 'react';
import Intro from '../components/Intro';
import ListDetailView from '../components/Layouts/ListDetailView';

const About = () => {
    return (
        <div>
            <ListDetailView list={null} hasDetail detail={<Intro />} />
        </div>
    )
}