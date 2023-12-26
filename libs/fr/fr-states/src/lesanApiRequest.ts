/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';

interface IApiRequest {
  set?: any;
  token?: string;
  get: any;
  model: string;
  act: string;
}

export const LesanApiRequest = ({
  model,
  act,
  set,
  get,
  token = '',
}: IApiRequest) => getResponse(model, act, get, set, token);

const getResponse = async (
  model: string,
  act: string,
  get: any,
  set?: any,
  token: string = ''
) => {
  try {
    const response = await axios.post(
      'http://localhost:1366/lesan',
      {
        service: 'main',
        model: model,
        act: act,

        details: {
          set,
          get,
        },
      },
      {
        headers: {
          'Content-Type': 'application/json',
          token,
        },
      }
    );

    if (!response.status || response.data.success === false) {
      throw Error(response.data.body as string);
    }
    // may error if there is no body

    if (response.data.success === false) {
      throw new Error(response.data.body as string);
    }

    return response;
  } catch (err: any) {
    throw Error(err.message);
  }
};
