import FamGallery from './FamGallery';
import Heroes from './Heroes';
import Promotion from './Promotion';
import TvGallery from './TvGallery';

const Home = () => {
  return (
    <main className='max-w-full relative top-0 left-0'>
      <Heroes />
      <Promotion />
      <TvGallery />
      <FamGallery />
    </main>
  );
};

export default Home;
