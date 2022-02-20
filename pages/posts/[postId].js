import { useRouter } from 'next/router'

function Post({ post }) {
  const router = useRouter()

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <>
      <h2>
        {post.id} {post.title}
      </h2>
      <p>{post.body}</p>
    </>
  )
}

export default Post

export async function getStaticPaths() {
    /*const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();

    const paths = data.map(post => {
        return{
            params:{
                postId: `${post.id}`,
            }
        }
    });*/
    return{
        paths: [
            {params: {postId: '1'}},
            {params: {postId: '2'}},
            {params: {postId: '3'}},
            {params: {postId: '4'}},
            {params: {postId: '5'}},
            {params: {postId: '6'}},
            {params: {postId: '7'}},
            {params: {postId: '8'}},
            {params: {postId: '9'}},
            {params: {postId: '10'}},
        ],
        /*paths: paths,*/
        fallback: true,
        /* if the fallback is set to false, 404 page will display when the other paths that not specified above.
        Also creates html pages for each path */
        /* If the fallback is set to true, if the path not specified,
        no 404 page will display, but a new json for the new page will generate.
        for the above case, for the postId 11, there will no 404 page display, but a new
        page create background.
        if we need a 404 page display here set a flag, notFound to true*/
        /* if the fallback is 'blocking', no 404 page shows. there is no fallback/flash state (ie. loading... etc...) */
    }
}

export async function getStaticProps(context) {
    const { params } = context
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${params.postId}`
    )
    const data = await response.json()

    if (!data.id) {
      return {
        notFound: true
      }
    }

    console.log(`Generating page for /posts/${params.postId}`)
    return {
      props: {
        post: data
      }
    }
  }