import { Button } from "./Styles";

interface AddButtonProps {
  onClick?: () => void;
  icon?: React.ReactNode;
}

export default function AddButton({ onClick, icon }: AddButtonProps) {
  return (
    <Button onClick={onClick}>
      { icon }
    </Button>
  )
}