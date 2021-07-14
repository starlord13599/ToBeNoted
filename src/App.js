import TodoApp from './TodoApp';
import { createTheme, ThemeProvider } from '@material-ui/core';

const theme = createTheme({
	typography: {
		fontFamily: 'QuickSand',
		fontWeightLight: 300,
		fontWeightRegular: 400,
		fontWeightMedium: 500,
		fontWeightBold: 700,
	},
});

function App() {
	return (
		<ThemeProvider theme={theme}>
			<TodoApp></TodoApp>
		</ThemeProvider>
	);
}

export default App;
