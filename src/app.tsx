import React, { FC } from 'react';
import { HashRouter, Routes } from 'react-router-dom';
import DefaultLayout from './components/defaultLayout';
import coreRoutes from './routes';

type AppProps = {};

const App: FC<AppProps> = ({}) => {

	return (
		<HashRouter>
			<DefaultLayout>
				<Routes>
					{coreRoutes}
				</Routes>
			</DefaultLayout>
		</HashRouter>
	);
};

export default App;
