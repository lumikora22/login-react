import { useAuth } from '../context/authContext';

function Home() {
	const { user, logout, loading } = useAuth();

	console.log(user);

	const handleLogout = async () => {
	try {
    await logout();
  } catch (e) {
    console.log(e);
  } 
	};

	if (loading) return <p>Loading...</p>;

	return (
		<div>
			<h1>Welcome {user.displayName || user.email}</h1>;
			<button onClick={handleLogout}>Logout</button>
		</div>
	);
}

export default Home;
