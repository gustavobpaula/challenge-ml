const theme = {
  colors: {
    yellow: '#ffe600',
    gray1: '#333333',
    gray2: '#666666',
    gray3: '#999999',
    gray4: '#eeeeee',
    blue: '#3483fa',
    blank: '#ffffff',
  },
  spacings: {
    rule1: '16px',
    rule2: '18px',
    rule3: '32px',
  },
  type: {
    fontFamily: "'Montserrat', sans-serif",
    sizes: {
      xxs: '12px',
      xs: '14px',
      sm: '16px',
      md: '18px',
      lg: '24px',
      xl: '26px',
      xxl: '28px',
      xxxl: '46px',
    },
  },
  breakpoints: {
    forPhoneOnly: '599px',
    forTabletPortraitUp: '600px',
    forTabletLandscapeUp: '900px',
    forDesktopUp: '1200px',
    forBigDesktopUp: '1800px',
  },
}

export type ThemeProps = typeof theme
export default theme
