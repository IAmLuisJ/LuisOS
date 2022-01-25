import React from 'react';
import Intro from '../../components/Intro';
import ListDetailView from '../../components/Layouts/ListDetailView';
import SiteLayout from '../../components/Layouts/SiteLayout';

const Writing = () => {
    return (<div>
        <SiteLayout>
            <ListDetailView list={ } hasDetail={false} detail={<Intro />} />
        </SiteLayout>
    </div>)
}

export default Writing;