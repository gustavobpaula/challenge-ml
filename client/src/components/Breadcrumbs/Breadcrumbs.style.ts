import { css } from '@emotion/react'
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
  display: none;
  font-size: ${({ theme }) => theme.type.sizes.xs};

  &:last-of-type {
    display: inline-block;
  }

  ${({ theme }) => css`
    @media (min-width: ${theme.breakpoints.forDesktopUp}) {
      display: inline-block;

      &::before {
        content: '>';
        margin: 0 5px;
      }

      &:first-of-type {
        &::before {
          display: none;
        }
      }
    }
  `}
`
