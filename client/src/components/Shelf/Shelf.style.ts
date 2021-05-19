import styled from '@emotion/styled'

export const ShelfList = styled.ul`
  list-style: none;
  padding: ${({ theme }) => theme.spacings.rule1};
`

export const ShelfListItem = styled.li`
  border-bottom: ${({ theme }) => `2px solid ${theme.colors.gray4}`};

  &:last-of-type {
    border-bottom: none;
  }
`
