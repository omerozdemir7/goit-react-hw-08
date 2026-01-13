import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>
        Welcome to the Phonebook App
        <span role="img" aria-label="greeting icon">💁‍♀️</span>
      </h1>
    </div>
  );
}