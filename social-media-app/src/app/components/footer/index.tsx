import { NavOption } from "@/app/types/types";
import Link from "next/link";
import styles from "./MainFooter.module.css";

type MainFooterProps = {
  footerItems: NavOption[];
  appTitle: string;
};

export default function MainFooter({ footerItems, appTitle }: MainFooterProps) {
  return (
    <>
      <div className={styles.container}>
        <nav>
          <ul>
            {footerItems.map((item, index) => {
              return (
                <li key={index} className={styles.item}>
                  <Link className={styles.link} href={item.url}>{item.name}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div>&copy; 2025 {appTitle}</div>
      </div>
    </>
  );
}
