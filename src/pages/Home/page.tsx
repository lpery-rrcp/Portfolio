import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

function HomePage() {
  return (
    <>
      <Navbar />
      <title>Home Page to Portfolio</title>

      <div></div>

      <div>
        <p>Welcome to my portfolio!</p>
      </div>

      <title>About Section</title>
      <div>
        <p>Learn more about me and my background.</p>
      </div>

      <title>Skills Section</title>
      <div>
        <p>Here are some of the skills I have developed.</p>
      </div>

      <Footer />
    </>
  );
}

export default HomePage;
