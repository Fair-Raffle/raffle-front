import Navbar from "./navbar";

const Layout = ({ children }) => {
  return (
    <div style={{ minHeight: "80vh" }}>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
