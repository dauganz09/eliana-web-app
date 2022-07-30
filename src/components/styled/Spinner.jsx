import { SyncLoader } from 'react-spinners';
import styled from 'styled-components';

const FullPageSpinnerContainer = styled("div")({
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  });
  
  export const FullPageSpinner = () => (
    <FullPageSpinnerContainer>
      <SyncLoader size={20} color='#003152' />
    </FullPageSpinnerContainer>
  );