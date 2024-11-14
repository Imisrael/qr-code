'use client'

import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

function DisplayParams() {

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
      textTransform: 'uppercase' as const,
      margin: 'auto'
    }
    const searchParams = useSearchParams();
    const content = searchParams.get('content');

    return ( 
        <div style={pageStyles}>
            <main style={headingStyles}>
                <h1> {content} </h1>
            </main>
        </div>
    )
}

export default function Home() {
  return (
        <Suspense>
            <DisplayParams />
        </Suspense>
  );
}
