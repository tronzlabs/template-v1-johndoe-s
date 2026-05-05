import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './providers/ThemeProvider';
import { LenisProvider } from './providers/LenisProvider';
import Layout from './components/Layout';
import Cursor from './components/Cursor';
import Loader from './components/Loader';
import PageTransition from './components/PageTransition';
import Home from './pages/Home';
import Work from './pages/Work';
import About from './pages/About';
import Contact from './pages/Contact';
import Playground from './pages/Playground';
import NotFound from './pages/NotFound';
import StartProjectOverlay from './components/StartProjectOverlay';

export default function App() {
  return (
    <ThemeProvider>
      <LenisProvider>
        <div className="grain min-h-screen">
          <Loader />
          <Cursor />
          <Layout>
            <PageTransition>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/work" element={<Work />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/playground" element={<Playground />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </PageTransition>
          </Layout>
          <StartProjectOverlay />
        </div>
      </LenisProvider>
    </ThemeProvider>
  );
}
