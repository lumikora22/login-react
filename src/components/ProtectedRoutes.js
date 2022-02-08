import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/authContext';

export function ProtectedRoute({ children }) {
	const { user, loading } = useAuth();
	if (loading) return <p>Loading...</p>;

	if (!user) return <Navigate to='/login'></Navigate>;

	return children;
}
