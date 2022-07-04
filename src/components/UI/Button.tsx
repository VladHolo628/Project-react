interface IButtonProps {
  children: string;
  type: 'submit' | 'reset' | 'button';
  classes?: string;
  handler?: any;
  disabled?: boolean;
}

const Button: React.FC<IButtonProps> = ({
  handler,
  classes,
  type,
  disabled,
  children,
}) => {
  let additionalClass = classes;
  const isDisabled = disabled;

  return (
    <button
      disabled={isDisabled}
      onClick={handler}
      className={`text-stone-100 rounded-lg px-4 py-1 bg-stone-700 shadow-md shadow-stone-900/50 text-center disabled:opacity-60  enabled:hover:bg-stone-600 ${additionalClass}`}
      type={type}>
      {children}
    </button>
  );
};

export default Button;
