import './About.scss';
import Typewriter from 'typewriter-effect';

const About = () => {
  return (
    <section className="about">
      <div className="about__static-text">I'm</div>
      <Typewriter
        options={{
          strings: ["Umut Palabiyik", "Front-end Developer"],
          autoStart: true,
          loop: true,
          wrapperClassName: "about__dynamics",
          cursor: "|",
          cursorClassName: "about__cursor"

        }}
      />
    </section>
  );
};

export default About;
