import { LinkProps } from 'react-router-dom'
import { Button as ButtonStyle } from './styles'
import { FormEvent } from 'react'

export type Props = {
  variant?: 'primary' | 'secondary'
  onClick?: (e?: FormEvent<HTMLFormElement>) => void
  children: string
  type?: string
  to?: string
  as?:
    | React.ForwardRefExoticComponent<
        LinkProps & React.RefAttributes<HTMLAnchorElement>
      >
    | string
}

const Button = ({
  variant = 'primary',
  onClick,
  children,
  type = 'button',
  to,
  as
}: Props) => (
  <ButtonStyle variant={variant} onClick={onClick} type={type} as={as} to={to}>
    {children}
  </ButtonStyle>
)

export default Button
