import React, { useState } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import '../styles/index.scss'



const API_URL = `https://chess-api-cbandara.herokuapp.com/knight`;

const SecondPage = () => {
  const [board, setBoard] = useState({});
  const Chessboard = typeof window !== `undefined` ? require("chessboardjsx").default : null


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
      [cur]: { backgroundColor: 'rgba(127, 191, 63, 0.81)' },
      [square]: { backgroundColor: 'rgba(127, 191, 63, 0.81)' }
    }), {})

    setBoard({
      knight: { [square]: 'wN' },
      highlights: squareStyles
    })

    console.log(square, squareStyles);
  }

  return (
    <Layout>
      <SEO title="Chess" />
      <div className="container">
        <Link to="" className="back-btn"><button className="button">BACK</button></Link>
        <h1>Chess Board</h1>
        <h2>Instructions</h2>
        <p>1.) Press Play</p>
        <p>2.) A chessboard will load. Click on any square to pick the Knight's initial position</p>
        <p>3.) The app will then highlight the available squares for the Knight in exactly TWO moves.</p>

        <br />
        {Chessboard && <Chessboard position={board.knight} squareStyles={board.highlights} draggable={false} showNotation={true} onSquareClick={onSquareClicked} />}
      </div>

    </Layout>
  )
}

export default SecondPage


// Display an empty board

// Listen for a onSquareClick event

// Once square is clicked, send that square to API

// Have API return list of possible legal moves for Knight
// on that square

// Highlight squares of legal moves