import { TestGraph } from 'fr/fr-shared';
import { getCountriesByLesanMethods } from 'fr/fr-states';

const Index = () => {
  return <TestGraph />;
};

export default Index;

export const getStaticProps = async () => {
  const countries = await getCountriesByLesanMethods();

  return {
    props: {
      initialZustandState: { countries },
    },
  };
};
