import { css } from '@emotion/react'
import styled from '@emotion/styled'

export const Content = styled.article`
  display: flex;
  flex-direction: column;

  ${({ theme }) => css`
    @media (min-width: ${theme.breakpoints.forDesktopUp}) {
      flex-direction: row;
      justify-content: space-between;
    }
  `}
`

export const Description = styled.div`
  margin: ${({ theme }) => theme.spacings.rule3};
`

export const Price = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.rule3};
    @media (min-width: ${theme.breakpoints.forDesktopUp}) {
      min-width: 300px;
      max-width: 300px;
      margin-left: 0;
    }
  `}
`

export const Suptitle = styled.span`
  color: ${({ theme }) => theme.colors.gray1};
  display: block;
  font-size: ${({ theme }) => theme.type.sizes.xs};
  margin-bottom: ${({ theme }) => theme.spacings.rule1};
`

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.gray1};
  font-size: ${({ theme }) => theme.type.sizes.lg};
  margin-bottom: ${({ theme }) => theme.spacings.rule3};
  margin-top: 0;
`

export const Value = styled.h2`
  color: ${({ theme }) => theme.colors.gray1};
  font-size: ${({ theme }) => theme.type.sizes.xxxl};
  font-weight: 500;
  margin-bottom: ${({ theme }) => theme.spacings.rule3};
  margin-top: 0;
`

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.blue};
  border: none;
  border-radius: 6px;
  color: ${({ theme }) => theme.colors.blank};
  cursor: pointer;
  font-size: ${({ theme }) => theme.type.sizes.md};
  padding: ${({ theme }) => theme.spacings.rule1};
  width: 100%;
`

export const Picture = styled.figure`
  margin: 0;
  max-width: 680px;

  img {
    width: 100%;
  }
`

export const DescriptionTitle = styled.h3`
  color: ${({ theme }) => theme.colors.gray1};
  font-size: ${({ theme }) => theme.type.sizes.xxl};
  font-weight: normal;
  margin: ${({ theme }) => `${theme.spacings.rule3} 0`};
`

export const PlainText = styled.p`
  color: ${({ theme }) => theme.colors.gray3};
  font-size: ${({ theme }) => theme.type.sizes.sm};
  line-height: 150%;
`
