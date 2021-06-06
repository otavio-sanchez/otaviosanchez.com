
import Head from 'next/head'
import Menu from '../components/menu'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Otávio Sanchez</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Menu items={[]} title='Otávio' subtitle='Desenvolvedor' />

        <p>
          test
        </p>

      </main>
    </div>
  )
}
