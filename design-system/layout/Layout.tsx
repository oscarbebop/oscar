import { Header } from "design-system/header/Header";

interface IProps {
  children: React.ReactNode;
}

export function Layout(props: IProps): JSX.Element {
  const { children } = props;

  return (
    <div className="container">
      <Header />
      <main>{children}</main>
    </div>
  );
}
