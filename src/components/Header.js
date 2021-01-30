import React from 'react';

function Header() {
    return (
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
    );
}

export default Header;