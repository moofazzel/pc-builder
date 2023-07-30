import Footer from "../UI/Footer";
import Navbar from "../navbar/Navbar";


const RootLayout = ({ children }) => {
  return (
    <main>
      <Navbar />
      {children}
      <Footer />
    </main>
  );
};
export default RootLayout;
