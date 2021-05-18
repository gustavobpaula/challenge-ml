import styled from '@emotion/styled'
import { Container as ContainerComponent } from 'components'

export const Container = styled(ContainerComponent)`
  background-color: ${({ theme }) => theme.colors.blank};
  padding: 5px 0;
  width: 100%;
`

export const Content = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`
