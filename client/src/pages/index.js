
import Head from 'next/head';

export default function Home() {
  return (
    <div>

      <Head>
        <title>Welcome To Pusher Client App</title>
        <meta name="description" content="A real-time application using Next.js and Pusher" />
      </Head>

      <main className={`flex h-screen items-center justify-center`} >

        Welcome To Pusher Client App

      </main>
    </div>
  );
}
