import { Head } from '@/components/shared/Head'
import { GlobalStyle } from '@/styles/Globals'
import { Paragraph, Title } from '@/styles/Texts'

export default function Home() {
  return (
    <>
      <Head />
      <main>
        <Title>Hello World!</Title>
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Paragraph>
      </main>
    </>
  )
}
