import React from 'react';
import { Route } from 'react-router-dom';
import paths from './paths';

const [Greeting] = [
	import('./pages/greeting')
].map((module) => {
	const LazyElement = React.lazy(() => module);

	return <React.Suspense fallback={null}><LazyElement/></React.Suspense>
});

export const routesInfo = {
	index: {
		path: paths.index,
		element: Greeting
	},
}

const coreRoutes = Object.values(routesInfo).map(({ element, path }, index) =>
	<Route element={element} path={path} key={index}/>
)

export default coreRoutes;
