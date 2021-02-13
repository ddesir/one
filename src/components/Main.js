import React from 'react';
import gameapedia from '../img/game-a-pedia-01.png'; // Will be passed as props later
import cis211 from '../img/cis211-final.png';

class Main extends React.Component {
    render() {
        return (
            <main>
                <h2>Projects</h2>

                <div className="flex">
                    <div className="project">
                        <img src={gameapedia} alt="Game A-pedia logo" />
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
                        <img src={cis211} alt="Screen shot of CIS211 final project site"/>
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
        );
    }
}

export default Main;