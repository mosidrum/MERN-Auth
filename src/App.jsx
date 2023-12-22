import React from 'react';
import { AppRoutes } from '@routes/AppRoutes';
import { SnackbarProvider } from 'notistack';

function App() {
	return (
		<div>
			<SnackbarProvider
				anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
			>
				<AppRoutes />
			</SnackbarProvider>
		</div>
	);
}

export default App;
