// Chakra Components

// Custom Components
import Base from '../components/globals/Base';
import Header from '../components/globals/Header';
import Filters from '../components/Filters';
import Grid from '../components/Grid';

export default function Home() {
  return (
    <Base>
      <Header />
      <Filters />
      <Grid />
    </Base>
  )
}
