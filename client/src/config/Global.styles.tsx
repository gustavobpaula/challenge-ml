import { css, Global, useTheme } from '@emotion/react'

const GlobalStyles = () => {
  const theme = useTheme()
  return (
    <Global
      styles={css`
        @font-face {
          font-family: 'Montserrat';
          src: url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
        }

        body {
          background-color: ${theme.colors.gray4};
          font-family: ${theme.type.fontFamily};
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          margin: 0;
        }

        a {
          text-decoration: none;
        }
      `}
    />
  )
}

export default GlobalStyles
