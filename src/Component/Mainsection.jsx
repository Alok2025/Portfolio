import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faInstagram,
    faGithub,
    faLinkedin,
    faTwitter,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons";

function Mainsection() {
    return (
        < >
            <div className="Container" id="home">
                <div className="container-lg">
                    <div className="intro">
                        <h3>Hii, i am 👋</h3>
                        <h1>  Alok <span>Kharwar</span> </h1>
                        <h2>Frontend <span>Developer</span> </h2>
                        <p>I craft modern, responsive and user-friendly web experiences
                            with clean code and Creative Design
                        </p>
                        <div className="btnbox">
                            <button
                                className="btn Projectbtn"
                                onClick={() => {
                                    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                                }}
                            >
                                View Projects
                            </button>

                            <button className="btn contactbtn"
                                onClick={() => {
                                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                                }}
                            >
                                Contact Me
                            </button>
                        </div>
                        <div className="social-media">

                            <a href="https://www.instagram.com/alokstories/" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faInstagram} className="icon instagram" />
                            </a>

                            <a href="https://github.com/Alok2025" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faGithub} className="icon github" />
                            </a>

                            <a href="https://www.linkedin.com/in/alok-kharwar-dev/" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} className="icon linkedin" />
                            </a>

                            <a href="https://twitter.com/yourusername" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faTwitter} className="icon twitter" />
                            </a>

                            <a href="https://www.youtube.com/@codeXgammer-Zone" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faYoutube} className="icon youtube" />
                            </a>

                        </div>
                    </div>
                    <div className="hero">
                        <div className="img"></div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Mainsection
