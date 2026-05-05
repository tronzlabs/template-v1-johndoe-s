import Nav from './Nav';
import Footer from './Footer';
import StatusPill from './StatusPill';

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <main className="relative z-10 pt-24">{children}</main>
      <Footer />
      <StatusPill />
    </>
  );
}
