import styled from 'styled-components';
import { TestGraph } from 'fr/fr-shared';
import { getCountriesByGraphMethods } from 'fr/fr-states';

const Index = () => {
  return <TestGraph />;
};

export default Index;

export const getServerSideProps = async () => {
  const countries = await getCountriesByGraphMethods();

  return {
    props: {
      initialZustandState: { countries },
    },
  };
};
