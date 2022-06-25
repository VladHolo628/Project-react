const Button = (props: {
  children: string;
  type: 'submit' | 'reset' | 'button';
  classes:string
  handler?:any
  disabled?:boolean
}) => {
  let additionalClass = props.classes;
  const isDisabled = props.disabled;

  return (
    <button
      disabled={isDisabled}
      onClick={props.handler}
      className={`text-stone-100 rounded px-4 py-1 bg-stone-700 shadow-md shadow-stone-900/50 text-center disabled:opacity-60  enabled:hover:bg-stone-600 ${additionalClass}`}
      type={props.type}>
      {props.children}
    </button>
  );
};

export default Button;
