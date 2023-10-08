import { Container } from "@mantine/core";
import { Footer } from "./footer";
import { Header } from "./header";

export function Layout({ children }) {
  return (
    <>
      <Header />
      <Container>
        {children}
      </Container>
      <Footer />
    </>
  )
}