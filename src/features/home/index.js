import { Layout } from '@/components/layouts'
import { Image, Container, Title, Button, Group, Text, List, ThemeIcon, rem } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import classes from '@/styles/Hero.module.css';
import image from '@/assets/img/icon.svg'

export default function HomeFeatures() {
  return (
    <Layout>
      <Container size="md">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              A <span className={classes.highlight}>Holiday</span> API <br /> list in Indonesia
            </Title>
            <Text c="dimmed" mt="md">
              A list of API in Indonesia which provided list of holiday, always update in each
              1 Desember every year.
            </Text>

            <List
              mt={30}
              spacing="sm"
              size="sm"
              icon={
                <ThemeIcon size={20} radius="xl">
                  <IconCheck style={{ width: rem(12), height: rem(12) }} stroke={1.5} />
                </ThemeIcon>
              }
            >
              <List.Item>
                <b>Always Update</b> – integrated to update and real time
              </List.Item>
              <List.Item>
                <b>Free and open source</b> – all packages have MIT license, you can use Mantine in
                any project
              </List.Item>
            </List>

            <Group mt={30}>
              <Button radius="xl" size="md" className={classes.control}>
                Get started
              </Button>
              <Button variant="default" radius="xl" size="md" className={classes.control}>
                Source code
              </Button>
            </Group>
          </div>
          <Image src={image.src} className={classes.image} />
        </div>
      </Container>
    </Layout>
  )
}
