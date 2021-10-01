import Head from "next/head";
import FeaturedPosts from "../componets/home-page/featured-posts";
import Hero from "../componets/home-page/hero";
import { getfeaturedPosts } from "../lib/posts-util";

// const DUMMY_POSTS = [
//   {
//     title: "getting-started-with-nextjs",
//     image: "getting-started-nextjs.png",
//     excerpt: "Next.js is a React Framework for Production",
//     slug: "getting-started-with-nextjs",
//     date: "2021-09-29",
//   },
//   {
//     title: "getting-started-with-nextjs2",
//     image: "getting-started-nextjs.png",
//     excerpt: "Next.js is a React Framework for Production",
//     slug: "getting-started-with-nextjs",
//     date: "2021-09-29",
//   },
//   {
//     title: "getting-started-with-nextjs3",
//     image: "getting-started-nextjs.png",
//     excerpt: "Next.js is a React Framework for Production",
//     slug: "getting-started-with-nextjs",
//     date: "2021-09-29",
//   },
//   {
//     title: "getting-started-with-nextjs4",
//     image: "getting-started-nextjs.png",
//     excerpt: "Next.js is a React Framework for Production",
//     slug: "getting-started-with-nextjs",
//     date: "2021-09-29",
//   },
// ];

const HomePage = ({ posts }) => {
  return (
    <>
      <Head>
        <title>DevBlog</title>
        <meta
          name="description"
          content="I will blog about web development while learning Next.js"
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  );
};

export const getStaticProps = () => {
  const featuredPosts = getfeaturedPosts();
  return {
    props: {
      posts: featuredPosts,
    },
  };
};

export default HomePage;
