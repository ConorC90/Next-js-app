// pages/blog.js or pages/blog.tsx
import Image from "next/image";
export async function getStaticProps() {
  // Replace 'CMS_API_ENDPOINT' with the actual endpoint provided by your CMS
  // and 'YOUR_API_KEY' with your API key or token if needed.
  const res = await fetch("http://localhost:1337/api/web-blocks?populate=*", {
    headers: {
      Authorization:
        "e0775cfb74adb00e6016370a79bf0400c15cadfb197e32a40fe6de33c04296a63b3e5be151ba04561cef4b4f1a552fb78964560eff13067e8967d5dec4e7728b57e81c308e56029d38c49e8cdc8130a4a9efc38253e32ccf02dfa745001574319fd5add734c0f9fc4fcab0a2c5f26c51828c2eddd3c8c680977461007803ccdc", // Only needed if your CMS requires authentication
    },
  });

  // Parse the JSON returned by the CMS API
  const posts = await res.json();

  console.log(
    posts.data[0].attributes,
    "postsxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    posts,
    posts.data[0].attributes.Media.data[0].attributes.url
  );

  // Pass the posts data to the page via props
  return { props: { posts } };
}

const BlogPage = ({ posts }: any) => (
  <div>
    <h1>{posts.data[0].attributes.Title}</h1>
    {/* Render your blog posts here, for example: */}
    <h2>{posts.data[0].attributes.Body}</h2>
    {/* <h2>{posts.data[0].attributes.Media}</h2> */}
    <Image
      src={`http://localhost:1337${posts.data[0].attributes.Media.data[0].attributes.url}`}
      alt=""
      width={200}
      height={200}
    />
  </div>
);

export default BlogPage;
