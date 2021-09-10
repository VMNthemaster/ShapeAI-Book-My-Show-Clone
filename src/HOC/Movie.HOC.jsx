import React from 'react';
import {Route} from 'react-router-dom';
import MovieLayout from '../layouts/Movie.Layout';

const MovieHOC = ({component, ...rest}) => {
    const Component = component;
    return (
        <>
            <Route {...rest} component = {(props) => (
                <MovieLayout>
                    <Component {...props} />
                </MovieLayout>
            )}></Route>
        </>
    )
};

export default MovieHOC;