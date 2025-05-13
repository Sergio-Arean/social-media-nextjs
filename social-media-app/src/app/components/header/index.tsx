import { NavOption } from "@/app/types/types";
import Link from "next/link";
import styles from './MainHeader.module.css'

type HeaderProps = {
  options: Array<NavOption>;
};

export default function MainHeader({ options }: HeaderProps) {
  return (
    <header className={styles.container}>
      <nav>
        <ul>
          {options.map((option) => {
            return (
              <li key={option.url}>
                <Link className={styles.link} href={option.url}>{option.name}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
