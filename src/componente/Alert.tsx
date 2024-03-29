import { ReactNode } from "react";

interface Props {
  children: ReactNode; //passing html content  elem
}

const Alert = ({ children }: Props) => {
  return <div className="alert alert-primary">{children}</div>;
};

export default Alert;
