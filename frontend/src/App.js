import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashborads from './pages/Dashborads';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
	return (
		<>
			<Router>
				<div className='container'>
					<Routes>
						<Route path='/' element={<Dashborads />} />
						<Route path='/login' element={<Login />} />
						<Route path='/register' element={<Register />} />
					</Routes>
				</div>
			</Router>
		</>
	);
}

export default App;
