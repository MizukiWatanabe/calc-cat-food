export const InputLabel = (props) => {
  return (
    <label className="block mt-4">
      <span className="mr-4">{props.label}</span>
      {props.children}
    </label>
  );
};
