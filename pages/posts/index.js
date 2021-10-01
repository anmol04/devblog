import Head from "next/head";
import AllPosts from "../../componets/posts/all-posts";
import { getAllPosts } from "../../lib/posts-util";

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

const AllPostsPage = ({ posts }) => {
  return (
    <>
      <Head>
        <title>All Posts</title>
        <meta
          name="description"
          content="A list of web-development related blogs!"
        />
      </Head>
      <AllPosts posts={posts} />
    </>
  );
};

export const getStaticProps = () => {
  const allPosts = getAllPosts();
  return {
    props: {
      posts: allPosts,
    },
  };
};

export default AllPostsPage;
