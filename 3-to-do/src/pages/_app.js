import Head from "next/head";
import "../styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Todo Web Application</title>
        <meta name="description" content="A simple and efficient todo web application built with Next.js." />
        <meta property="og:title" content="Todo Web Application" />
        <meta property="og:description" content="A simple and efficient todo web application built with Next.js." />
        <meta property="og:url" content="https://pinecone-academy-todo.vercel.app/" />
        <meta property="og:image" content="https://pinecone-academy-todo.vercel.app/todo-og-image.png" />
        <meta property="og:type" content="website" />
      </Head>

      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
