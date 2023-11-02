type Props = {
  toggle: () => void;
};

const MenuButton = (props: Props) => {
  return (
    <button
      className="h-7 w-7 ml-3 self-center flex flex-col items-center justify-center gap-1 lg:hidden"
      onClick={props.toggle}
    >
      <div className="bg-color6 w-6 h-0.5"></div>
      <div className="bg-color6 w-6 h-0.5"></div>
      <div className="bg-color6 w-6 h-0.5"></div>
    </button>
  );
};

export default MenuButton;
