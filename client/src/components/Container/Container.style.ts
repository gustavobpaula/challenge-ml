import { css } from '@emotion/react'
import styled from '@emotion/styled'

export const Container = styled.section`
  background-color: ${({ theme }) => theme.colors.yellow};
  margin: 0 auto;
  max-width: 1215px;

  ${({ theme }) => css`
    @media (min-width: ${theme.breakpoints.forDesktopUp}) {
      width: 100%;
      padding: 0;
    }
  `}

  padding: 0 5%;
  width: 90%;
`
