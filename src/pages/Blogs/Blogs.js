import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import BlockContent from "@sanity/block-content-to-react"
import sanityClient from "../../client"
import imageBuilder from "../../utils/imageBuilder"
import Loader from "../../components/Loader/Loader"

const Blogs = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
            title,
            excerpt,
            slug,
            publishedAt,
            mainImage{
              asset->{
              url
            }
          }        
        }`
      )
      .then((data) => setPosts(data))
  }, [])

  return (
    <>
      {posts.length === 0 ? (
        <Loader />
      ) : (
        <>
          <div className="text-center py-12 px-6 mt-12">
            <h1 className="font-display font-bold text-5xl mb-6">The Blog</h1>
            <p className="max-w-lg mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              vel arcu commodo, sodales nibh sed, efficitur sapien.
            </p>
          </div>
          <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 pt-12 pb-24">
            {posts.map((post) => (
              <div key={post.slug.current}>
                <img
                  src={imageBuilder(post.mainImage).width(700).url()}
                  alt={post.title}
                  className="w-full h-52 md:h-64 lg:h-96 xl:h-64 object-cover"
                />
                <div className="bg-gray-50 p-8">
                  <div className="text-xs text-gray-600 uppercase font-semibold">
                    {new Date(post.publishedAt)
                      .toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })
                      .replace(/ /g, " ")}
                  </div>
                  <h2 className="mt-3 text-3xl mb-6 font-display text-black leading-tight max-w-sm">
                    {post.title}
                  </h2>
                  <BlockContent
                    blocks={post.excerpt}
                    projectId={sanityClient.clientConfig.projectId}
                    dataset={sanityClient.clientConfig.dataset}
                  />
                  <Link
                    to={`/blog/${post.slug.current}`}
                    href={`/blog`}
                    className="flex items-center mt-6 uppercase text-sm text-black font-semibold"
                  >
                    Read article
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1"
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  )
}

export default Blogs
