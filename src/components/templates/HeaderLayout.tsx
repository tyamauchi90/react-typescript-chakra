import { ReactNode, memo } from "react";
import { Header } from "../organisms/layout/Header";
import { Outlet } from "react-router-dom";

type Props = {
  children?: ReactNode;
};

export const HeaderLayout: React.FC<Props> = memo((props) => {
  const { children } = props;
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
});
