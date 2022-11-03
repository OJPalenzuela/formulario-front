import { useField, ErrorMessage } from "formik";

type Opt = { value: string | number; desc: string };

interface Props {
  options: Opt[];
  name: string;
  label: string;
  [x: string]: any;
}

const RadioGroup = ({ label, options, ...props }: Props) => {
  const field = null;

  return (
    <div>
      <b>{label}</b>
      <ErrorMessage name={props.name} component="span" className="error" />
    </div>
  );
};

export default RadioGroup;
