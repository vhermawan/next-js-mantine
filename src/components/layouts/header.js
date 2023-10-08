import { Container } from '@mantine/core';
import classes from '@/styles/Header.module.css';

export function Header() {

  return (
    <header className={classes.header}>
      <Container size="md">
        <div className={classes.inner}>
          Ini adalah Header
        </div>
      </Container>
    </header>
  );
}