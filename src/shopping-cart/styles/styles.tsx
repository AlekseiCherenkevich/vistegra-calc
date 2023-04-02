import styled from 'styled-components'

export const SShoppingCartIcon = styled.button`
  background-image: url('https://cdn-icons-png.flaticon.com/512/419/419910.png');
  background-size: contain;
  width: 30px;
  height: 30px;
  border-radius: 5px;
`
export const SShoppingCartTableWrapper = styled.article`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  justify-content: center;
`

export const SShoppingCartTable = styled.table`
  max-width: 700px;
  text-align: center;

  &,
  th,
  td {
    border: 1px solid;
    border-collapse: collapse;
    padding: 8px 5px;
  }

  @media screen and (max-width: 600px) {
    border: none;
    max-width: 500px;
    margin: 0 10px;

    thead tr th {
      display: none;
    }
    tbody tr td {
      display: block;
      width: 100%;
    }
    tbody tr td::before {
      font-weight: bold;
      margin-left: 15px;
      width: 160px;
      text-align: left;
      content: attr(aria-describedby);
      float: left;
      margin-right: 20px;
    }
  }
`

export const SEmptyShoppingCart = styled.p`
  text-align: center;
`

export const SSortableHeadCeils = styled.th<{ arrow?: string }>`
  cursor: pointer;
  position: relative;

  &:after {
    content: ${props => props.arrow};
    color: white;
    position: absolute;
    left: 0;
    top: 0;
  }
`
