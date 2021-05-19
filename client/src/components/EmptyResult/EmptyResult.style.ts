import styled from '@emotion/styled'

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.gray1};
  font-size: ${({ theme }) => theme.type.sizes.lg};
  font-weight: 600;
`

export const ToDo = styled.li`
  color: ${({ theme }) => theme.colors.gray2};
  font-size: ${({ theme }) => theme.type.sizes.sm};
  line-height: 150%;
`

export const Content = styled.div`
  padding: ${({ theme }) => theme.spacings.rule3};
`
