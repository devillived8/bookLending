import Burger from "../burger/burger"

interface IHeaderProps {
    onToggle: () => void;
    isOpen: boolean;
}

const Header = ({onToggle, isOpen}: IHeaderProps) => {
  return (
    <header className="p-4 bg-black/40 flex justify-end sticky top-0">
        <Burger onToggle={onToggle} isOpen={isOpen}></Burger>
    </header>
  )
}

export default Header