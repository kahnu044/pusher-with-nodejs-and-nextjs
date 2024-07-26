
import Head from 'next/head';
import Notifications from '../../components/notifications';

export default function Home() {
  return (
    <div>

      <Head>
        <title>Welcome To Pusher Client App</title>
        <meta name="description" content="A real-time application using Next.js and Pusher" />
      </Head>


      <main className={`flex flex-col h-screen items-center justify-center bg-white text-black`} >
        <div>
          <p>Welcome To Pusher Client App </p>
        </div>

        <div>
          <Notifications />
        </div>

      </main>
    </div>
  );
}
