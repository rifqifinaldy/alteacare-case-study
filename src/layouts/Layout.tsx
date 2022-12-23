import { FC, ReactNode } from "react";

interface ILayouts {
  children: ReactNode;
}

const layouts: FC<ILayouts> = ({ children }) => {
  return <div>{children}</div>;
};

export default layouts;
