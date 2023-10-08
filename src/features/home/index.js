import { Layout } from '@/components/layouts'
import { Container } from '@mantine/core';
import classes from '@/styles/Hero.module.css';

export default function HomeFeatures() {
  return (
    <Layout>
      <Container size="md">
        <div className={classes.inner}>
          Ini adalah konten home
        </div>
      </Container>
    </Layout>
  )
}
