import { NavOption } from "@/app/types/types";
import Link from "next/link";
import styles from "./MainHeader.module.css";
import PublishButton from "../buttons/publish-btn";
import TitleLogo from "../title-logo";

type HeaderProps = {
  options: Array<NavOption>;
};

export default function MainHeader({ options }: HeaderProps) {
  return (
    <header className={styles.container}>
      <TitleLogo title="PulseStream"/>
      <nav className={styles.navContainer}>
        <ul>
          {options.map((option) => {
            return (
              <li className={styles.navItem}  key={option.url}>
                <Link className={styles.link} href={option.url}>
                  {option.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className={styles.btnWrapper}>
        <PublishButton title="Publicar" />
      </div>
    </header>
  );
}
