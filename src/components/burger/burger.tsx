interface IBurgerProps {
  isOpen: boolean;
  onToggle: () => void;
}

const Burger = ({ isOpen, onToggle }: IBurgerProps) => {
  return (
    <button 
      onClick={onToggle} 
      className="w-[30px] h-[20px] flex flex-col justify-between cursor-pointer relative z-[100]" 
      title={isOpen ? "Закрыть меню" : "Открыть меню"}
    >
      <span 
        className={`
          w-full h-[2px] bg-accent-red transform transition-all duration-300 origin-center
          ${isOpen ? 'translate-y-[9px] rotate-45' : 'translate-y-0 rotate-0'}
        `}
      />
      <span 
        className={`
          w-full h-[2px] bg-accent-red transition-all duration-300
          ${isOpen ? 'opacity-0 scale-x-0' : 'opacity-100 scale-x-100'}
        `}
      />
      <span 
        className={`
          w-full h-[2px] bg-accent-red transform transition-all duration-300 origin-center
          ${isOpen ? '-translate-y-[9px] -rotate-45' : 'translate-y-0 rotate-0'}
        `}
      />
    </button>
  );
};

export default Burger;