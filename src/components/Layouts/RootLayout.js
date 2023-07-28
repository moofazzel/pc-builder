import Navbar from "../navbar/Navbar";


const RootLayout = ({ children }) => {
  return (
    <main>
      <Navbar />
      {children}
    </main>
  );
};
export default RootLayout;
