import { logUserOut } from "../apollo";

const Home = () => {
	return (
		<h1>
			Home
			<button onClick={() => logUserOut()}>log out</button>
		</h1>
	);
};

export default Home;
