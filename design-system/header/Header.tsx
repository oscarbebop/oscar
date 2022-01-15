import Link from "next/link";

export function Header(): JSX.Element {
  return (
    <Link href="/">
      <a>
        <div className="header-container">
          <h2>Home</h2>
        </div>
      </a>
    </Link>
  );
}
