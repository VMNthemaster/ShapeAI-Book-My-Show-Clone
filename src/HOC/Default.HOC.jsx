import React from 'react';
import {Route} from 'react-router-dom';
import DefaultLayout from '../layouts/Default.Layout';

const DefaultHOC = ({component, ...rest}) => {
    const Component = component;
    return (
        <>
            <Route {...rest} component = {(props) => (
                <DefaultLayout>
                    <Component {...props} />
                </DefaultLayout>
            )}></Route>
        </>
    )
};

export default DefaultHOC;