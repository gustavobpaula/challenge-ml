import styled from '@emotion/styled'

export const Content = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`

export const List = styled.ul`
  display: flex;
  list-style: none;
  margin: ${({ theme }) => `${theme.spacings.rule1} 0`};
  padding: 0%;
`

export const ListItem = styled.li`
  color: ${({ theme }) => theme.colors.gray3};
  font-size: ${({ theme }) => theme.type.sizes.xs};

  &::before {
    content: '>';
    margin: 0 5px;
  }

  &:first-child {
    &::before {
      display: none;
    }
  }
`
