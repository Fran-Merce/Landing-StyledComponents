import styled from 'styled-components';

export const StyledCard = styled.div`

  display: flex;
  align-items: center;
  flex-direction: ${({layout}) => layout || 'row'};
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0,0,0,0.15);
  margin: 40px 0;
  padding:60px;
  
  img{
    width: 80%;
    margin-left: 40px;
  }

  & > div{
    flex: 1;
  }

  @media (max-width:${({theme}) => theme.mobile}) {
    flex-direction: column;
    justify-content: center;
  
    img{
      width: 90%;
      margin-left: 0;
    }
  }

`