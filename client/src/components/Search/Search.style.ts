import styled from '@emotion/styled'

export const Form = styled.form`
  display: flex;
  margin-left: 25px;
  width: 100%;
`

export const Input = styled.input`
  border: none;
  border-radius: 4px 0 0 4px;
  color: ${({ theme }) => theme.colors.gray1};
  font-size: ${({ theme }) => theme.type.sizes.md};
  outline: none;
  padding: 7px 15px 9px 15px;
  width: 100%;
`

export const Button = styled.button`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.gray4};
  border: none;
  cursor: pointer;
  display: flex;
  height: 37px;
  justify-content: center;
  width: 37px;
`
