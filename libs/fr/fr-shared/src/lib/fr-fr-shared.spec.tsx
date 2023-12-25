import { render } from '@testing-library/react';

import FrFrShared from './fr-fr-shared';

describe('FrFrShared', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FrFrShared />);
    expect(baseElement).toBeTruthy();
  });
});
