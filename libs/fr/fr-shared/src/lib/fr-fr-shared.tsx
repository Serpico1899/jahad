import styled from 'styled-components';

/* eslint-disable-next-line */
export interface FrFrSharedProps {}

const StyledFrFrShared = styled.div`
  color: pink;
`;

export function FrFrShared(props: FrFrSharedProps) {
  return (
    <StyledFrFrShared>
      <h1>Welcome to FrFrShared!</h1>
    </StyledFrFrShared>
  );
}

export default FrFrShared;
