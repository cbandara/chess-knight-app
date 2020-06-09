import React, { useState } from "react"
import { Link } from "gatsby"
import Chessboard from "chessboardjsx";

import Layout from "../components/layout"
import SEO from "../components/seo"

const API_URL = `https://chess-api-cbandara.herokuapp.com/knight`;

const IndexPage = () => {
  const [board, setBoard] = useState({});

  const onSquareClicked = async (square) => {
    const availablePositions = await fetch(API_URL, {
      method: 'post',
      body: JSON.stringify({ position: square }),
      headers: {
        'Content-Type': 'application/json'
      },
    }).then(res => res.json()).catch(console.error);

    const squareStyles = availablePositions.reduce((acc, cur) => ({
      ...acc,
      [cur]: { backgroundColor: 'green' }
    }), {})

    setBoard({
      knight: { [square]: 'wN' },
      highlights: squareStyles
    })

    console.log(square, availablePositions);
  }

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Devin Bandara</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Chessboard position={board.knight} squareStyles={board.highlights} draggable={false} showNotation={true} onSquareClick={onSquareClicked} />

      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </Layout>
  )
}

export default IndexPage


// Display an empty board

// Listen for a onSquareClick event

// Once square is clicked, send that square to API

// Have API return list of possible legal moves for Knight
// on that square

// Highlight squares of legal moves