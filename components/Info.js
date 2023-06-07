import React from 'react'

export default function Info() {
    return (
        <header>
            <img className="image" src="./images/profile.jpg" />
            <section>
                <h2>Aleksandr Fetisov</h2>
                <h3>Pyhton Developer</h3>
                <a href="https://github.com/craxti" target="_blank"><h4>https://github.com/craxti</h4></a>
                <button className="flex"><img className="btn-img" src="images/envelope.png"/> Email</button>
            </section>
        </header>
    )
}
