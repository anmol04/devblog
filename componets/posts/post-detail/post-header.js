import Image from "next/image";
import classes from "./post-header.module.css";

const PostHeader = ({ title, image }) => {
  return (
    <header className={classes.header}>
      <h1>{title}</h1>
      <Image src={image} alt={title} height={200} width={300} />
    </header>
  );
};

export default PostHeader;
