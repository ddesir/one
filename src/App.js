import React from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  
  render() {
  	return (
    <div className="App">
      <div className="grid">
  <header>
    <div className="center snap">
      <img src="./img/memoji-deon.png" alt="Deon Avatar" />
      <h1>Deon Desir</h1>
      <p className="center">Computer Science<br />
        CUNY - Medgar Evers College<br />
        Brooklyn, NY</p>
    </div>

    <div className="about-me">
      <h2>About Me</h2>
      <p>Computer science student and presentation specialist with interests
        in data science, machine learning, UI/UX design and accessibility.</p>

      <p>My interests outside of programming/technology include project
        management, diversity and inclusion, and lacto-fermentation.</p>
    </div>
  </header>

  <main>
    <h2>Projects</h2>

    <div className="flex">
      <div className="wip">
        <h3>Sentiment Analysis of Presidential Debates</h3>
        <p>Analysis retweets, likes, and sentiment of streamed tweets.</p>
        <ul className="tag-list">
          <li>API</li>
          <li>Python</li>
        </ul>
      </div>

      <div className="wip">
        <h3>Rewrite of Projects</h3>
        <p>Ongoing revision and updates to current projects and <em>unfinished</em>
          projects, including Kotlin rewrites of Java-based Android class
          projects and future Swift versions.</p>
        <ul className="tag-list">
          <li>Android</li>
          <li>C++</li>
          <li>CSS</li>
          <li>HTML</li>
          <li>Javascript</li>
          <li>Python</li>
        </ul>
      </div>

      <div className="project">
        <img src="./img/game-a-pedia-01.png" alt="Game A-pedia logo"/>
        <h3><a href="https://github.com/ddesir/CS355-Final-Project">Game A-pedia</a></h3>
        <p>Android app displaying list of games from SQL query via
          RecyclerView. Group project three members.</p>
        <ul className="tag-list">
          <li>API</li>
          <li>Google Firebase</li>
          <li>Java</li>
          <li>Python</li>
          <li>SQLite</li>
        </ul>
      </div>

      <div className="project">
        <img src="./img/cis211-final.png" alt="Screen shot of CIS211 final project site"/>
        <h3><a href="http://ddesir.github.io/CIS211/">Final Website</a></h3>
        <p>Website created for Internet and Emerging technologies final project.</p>
        <ul className="tag-list">
          <li>CSS</li>
          <li>HTML</li>
          <li>Javascript</li>
          <li>Python</li>
        </ul>
      </div>
    </div>
  </main>

  <footer>
    <a href="https://github.com/ddesir">Github</a>
    <a href="https://www.linkedin.com/in/ddesir/">LinkedIn</a>
  </footer>
</div>
    </div>
  );
  }
}

export default App;
