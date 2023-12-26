import { LesanApiRequest } from '../../../lesanApiRequest';
import { store } from '../../../nextStore';

export const getCountriesByLesanMethods = async (
  page: number = 1,
  take: number = 10
) => {
  const str = store;

  str &&
    str.setState((states) => ({
      ...states,
      countries: {
        ...states.countries,
        loader: true,
      },
    }));

  try {
    const res = await LesanApiRequest({
      act: 'getCountries',
      model: 'country',
      get: {
        _id: 1,
        name: 1,
        population: 1,
        abb: 1,
        provinces: {
          _id: 1,
          name: 1,
          population: 1,
          abb: 1,
          cities: {
            _id: 1,
            name: 1,
            population: 1,
            abb: 1,
          },
        },
      },
      set: { page, take },
    });

    str &&
      str.setState((states) => ({
        ...states,
        countries: {
          ...states.countries,
          data: [...states.countries.data, ...res.data.body],
          loader: false,
        },
      }));

    return {
      data: res?.data.body,
      error: null,
      loader: false,
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
