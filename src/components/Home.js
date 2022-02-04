
import {useAuth} from '../context/authContext';

function Home() {

  const authContext = useAuth();
  console.log(authContext);
  return (
    <h1>Home</h1>
  )
}

export default Home
