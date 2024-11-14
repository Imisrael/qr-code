"use client"

import { useSearchParams } from 'next/navigation'

export default function Home() {

    const pageStyles = {
      color: "#fcfcfd",
      padding: "50px",
      fontFamily: "-apple-system, Roboto, sans-serif, serif",
      backgroundColor: "black"
    }
    const headingStyles = {
      marginTop: 0,
      marginBottom: 64,
      width: "100%",
      fontSize: 60,
      textTransform: 'uppercase',
      margin: 'auto'
    }
    const searchParams = useSearchParams();

    const content = searchParams.get('content');

  return (
    <div style={pageStyles}>
      <main style={headingStyles}>
        <h2> {content} </h2>
      </main>
    </div>
  );
}
