
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const about_hero = "https://i.pinimg.com/736x/cf/85/2f/cf852f48476cc90984e710c2d966278d.jpg"


function About() {
    return (
        <>
            <section className="about" id="about">
                <div className=".container-md aboutcontainer">
                    <div className="intro aboutintro">
                        <h2 className="heading2">About me .</h2>
                        <h1 className="heading1">About <span>Me</span></h1>
                        <h3>Get to know me better</h3>
                        <p>Hey, this is Alok Kharwar. I have completed my BCA,
                            and I am passionate about Python, Machine Learning, and Web Development.
                            I completed a Machine Learning internship where I worked on model training and validation using Python, Scikit-learn, and TensorFlow.
                            I have also built projects like Face Detection using OpenCV and a QR Code Generator in Python.
                            <br />
                            <br />
                            I am a quick learner, hardworking, and eager to start my career in the IT industry, where I can apply my skills, gain practical experience, and continue to grow professionally.
                            Thank you.
                        </p>
                        <button className="btn aboutbtn">Resuma &nbsp;  <FontAwesomeIcon icon={faDownload} /></button>
                    </div>
                    <div className="hero abouthero">
                        <img className="img" />
                    </div>
                </div>
            </section>

        </>
    )
}

export default About
