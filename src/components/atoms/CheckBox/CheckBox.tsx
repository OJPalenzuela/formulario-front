import { ErrorMessage, useField } from "formik";

interface Props {
  label: string;
  name: string;
  [x: string]: any;
}

export const CustomCheckBox = (props: Props) => {
  const [field] = useField(props);

  return <h1>Check</h1>;
};
