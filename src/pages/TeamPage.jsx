import Barbers from '../components/Barbers';
import Gallery from '../components/Gallery';
import { barbers, gallery } from '../data/content';

function TeamPage() {
  return (
    <div className="pt-20">
      <Barbers team={barbers} />
      <Gallery items={gallery} />
    </div>
  );
}

export default TeamPage;
