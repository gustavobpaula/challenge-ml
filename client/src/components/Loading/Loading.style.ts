import styled from '@emotion/styled'
import { css, keyframes } from '@emotion/react'
import { ThemeProps } from 'config/theme'

const animation = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`

const content = ({ theme }: { theme?: ThemeProps }) => css`
  --loadingColor: ${theme?.colors?.yellow};
  animation: ${animation} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border: 6px solid var(--loadingColor);
  border-color: var(--loadingColor) transparent transparent transparent;
  border-radius: 50%;
  box-sizing: border-box;
  display: block;
  height: 96px;
  position: absolute;
  width: 96px;
`

export const Logo = styled.img`
  height: 36px;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 53px;
`

export const Container = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
`

export const Content = styled.div`
  height: 96px;
  position: relative;
  width: 96px;
`

export const FirstAnimation = styled.div`
  ${content}
  /* stylelint-disable-next-line */
  animation-delay: -0.45s;
`

export const SecondAnimation = styled.div`
  ${content}
  /* stylelint-disable-next-line */
  animation-delay: -0.3s;
`

export const ThirdAnimation = styled.div`
  ${content}
  /* stylelint-disable-next-line */
  animation-delay: -0.15s;
`

export const FourthAnimation = styled.div`
  ${content}
`
