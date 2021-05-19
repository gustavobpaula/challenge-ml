import { css } from '@emotion/react'
import styled from '@emotion/styled'

export const ShelfItem = styled.article`
  display: flex;
`

export const Picture = styled.figure`
  display: inline-table;
  justify-content: center;
  margin: ${({ theme }) => theme.spacings.rule1};
  margin-left: 0;

  ${({ theme }) => css`
    @media (min-width: ${theme.breakpoints.forDesktopUp}) {
      display: flex;
      height: 180px;
      width: 180px;
    }
  `}

  width: 120px;

  img {
    border-radius: 4px;
    max-height: 100%;
    max-width: 100%;
  }
`

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${({ theme }) => theme.spacings.rule1};
`

export const Price = styled.div`
  margin-bottom: ${({ theme }) => theme.spacings.rule3};
  margin-top: ${({ theme }) => theme.spacings.rule1};
`

export const Value = styled.h3`
  color: ${({ theme }) => theme.colors.gray1};
  display: inline-block;
  font-size: ${({ theme }) => theme.type.sizes.lg};
  font-weight: normal;
  margin: 0;
`

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.gray1};
  font-size: ${({ theme }) => theme.type.sizes.md};
  font-weight: normal;
  margin: 0;
`

export const FreeShipping = styled.img`
  margin-left: ${({ theme }) => theme.spacings.rule1};
`

export const Locate = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.gray2};
    display: none;
    font-size: ${theme.type.sizes.xxs};
    margin-left: auto;
    margin-right: ${theme.spacings.rule3};
    margin-top: ${theme.spacings.rule3};

    @media (min-width: ${theme.breakpoints.forDesktopUp}) {
      display: block;
    }
  `}
`
