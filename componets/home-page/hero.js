import classes from "./hero.module.css";
import Image from "next/image";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/anmol.jpg"
          alt="Anmol Mahendra"
          height={300}
          width={300}
        />
      </div>
      <h1>Hi, I'm Anmol</h1>
      <p>
        I will blog about web development while I learn Next.js-The React
        Framework for Production
      </p>
    </section>
  );
};

export default Hero;
