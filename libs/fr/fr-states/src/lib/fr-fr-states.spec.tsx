import { render } from '@testing-library/react';

import FrFrStates from './fr-fr-states';

describe('FrFrStates', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FrFrStates />);
    expect(baseElement).toBeTruthy();
  });
});
