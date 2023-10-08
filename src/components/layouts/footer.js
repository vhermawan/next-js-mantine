import { Container } from '@mantine/core';
import classes from '@/styles/Footer.module.css';

export function Footer() {

  return (
    <div className={classes.footer}>
      <Container size="md">
        <div className={classes.inner}>
          Ini Footer
        </div>
      </Container>
    </div>
  );
}