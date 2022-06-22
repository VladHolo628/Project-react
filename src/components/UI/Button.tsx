const Button = (props: {
  children: string;
  type: 'submit' | 'reset' | 'button';
}) => {
  return (
    <button
      className="rounded px-4 py-1 bg-green-500 shadow-md shadow-green-900/50 text-center hover:bg-green-600"
      type={props.type}>
      {props.children}
    </button>
  );
};

export default Button;
