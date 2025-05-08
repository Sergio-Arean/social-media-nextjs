import { NavOption } from "@/app/types/types";
import Link from "next/link";

type HeaderProps = {
  options: Array<NavOption>;
};

export default function MainHeader({ options }: HeaderProps) {
  return (
    <header>
      <nav>
        <ul>
          {options.map((option) => {
            return (
              <li key={option.url}>
                <Link href={option.url}>{option.name}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
