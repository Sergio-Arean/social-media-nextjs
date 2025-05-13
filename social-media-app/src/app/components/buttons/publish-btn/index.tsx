import styles from './PublishButton.module.css'

type PublishButtonProps = {
  title: string;
  // containsIcon: boolean,
  // iconUrl?: string
};

export default function PublishButton({ title }: PublishButtonProps) {
  return <button className={styles.btn}>{title}</button>;
}
