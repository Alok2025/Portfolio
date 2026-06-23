

function Header() {
    return (
        <>
            <div className="navcontainer">
                <ul class="nav justify-content-center navbox">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#home">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#about">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#skills">Skills</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link " href="#projects">Projects</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link " href="#exp">Experience</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link " href="#contact">Contact</a>
                    </li>
                    <li class="nav-item cv">
                        <a class="nav-link " aria-disabled="true">Download CV</a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Header
