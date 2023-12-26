/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { gql } from 'graphql-request';
import { store } from '../../../nextStore';
import { RestApiRequest } from '../../../restApiRequest';
import { graphqlClient } from '../../../graphApiRequest';

export const getCountriesByGraphMethods = async () => {
  const str = store;

  str &&
    str.setState((states) => ({
      ...states,
      countries: {
        ...states.countries,
        loader: true,
      },
    }));

  const query = gql`
    {
      getFiftyCitiesOfCountry(pageNumber: 1, limit: 50) {
        name
        provinces {
          name
          cities {
            id
            name
            abb
            population
          }
        }
      }
    }
  `;

  const res: any = await graphqlClient.request(query);
  console.log(res);

  try {
    str &&
      str.setState((states) => ({
        ...states,
        countries: {
          ...states.countries,
          data: res.getFiftyCitiesOfCountry,
          loader: false,
        },
      }));

    return {
      data: res?.getFiftyCitiesOfCountry,
      error: null,
      loader: false,
    };
  } catch (error: any) {
    str &&
      str.setState((states) => ({
        countries: {
          ...states.countries,
          error: error.message ? error.message : 'we have problem',
          loader: false,
        },
      }));

    return {
      data: [],
      error: error.message ? error.message : 'we have problem',
      loader: false,
    };
  }
};
