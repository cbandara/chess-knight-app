import React, { useState } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import '../styles/index.scss'


const API_URL = `https://chess-api-cbandara.herokuapp.com/knight`;

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <div className="container">
        <h1>Information Wizard</h1>
        <h2>Objective</h2>
        <p>The objective of this app was to build an interactive chessboard that lets you
        click on a square and shows you the possible squares a
        night could land on in exactly TWO moves</p>
        <h2>Instructions</h2>
        <p>1.) Press Play</p>
        <p>2.) A chessboard will load. Click on any square to pick the Knight's initial position</p>
        <p>3.) The app will then highlight the available squares for the Knight in exactly TWO moves.</p>


        <Link to="/page-2" ><button className="button">PLAY</button></Link>
        <br />
        <h3>Supplemental Docs</h3>
        <a className="ext-link" href={'https://github.com/cbandara/chess-knight-app'} target="blank">Gatsby App Repository w/ README</a>
        <a className="ext-link" href={'https://github.com/cbandara/chess-knight-app'} target="blank">Node API Repository w/ README</a>
      </div >

    </Layout >
  )
}

export default IndexPage


// Display an empty board

// Listen for a onSquareClick event

// Once square is clicked, send that square to API

// Have API return list of possible legal moves for Knight
// on that square

// Highlight squares of legal moves