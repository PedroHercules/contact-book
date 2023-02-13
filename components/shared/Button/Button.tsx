import { ButtonStyled } from "./Styles"
import { ButtonProps } from "./Typing"

export default function Button({ onClick, text, type, variant }: ButtonProps) {
  return (
    <ButtonStyled
      onClick={onClick}
      type={type || 'button'}
      variant={variant || 'primary'}
    >
      { text }
    </ButtonStyled>
  )
}