import { Link } from "react-router-dom"
import HeroBg from "../../assets/bg-hero.jpeg"
import bottomBg from "../../assets/bg-bottom.jpeg"
import post1 from "../../assets/post-1.jpeg"
import post2 from "../../assets/post-2.jpeg"
import category1 from "../../assets/category-1.jpeg"
import category2 from "../../assets/category-2.jpeg"
import category3 from "../../assets/category-3.jpeg"

const Home = () => {
  return (
    <>
      <div className="-mt-24 relative w-full py-12 px-12 bg-yellow-900">
        <div className="relative z-10 text-center py-24 md:py-48">
          <h1 className="text-white text-center text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold mb-12">
            A taste of every lifestyle
          </h1>
          <Link
            to="/blogs"
            className="inline-block bg-yellow-800 text-white uppercase text-sm tracking-widest font-heading px-8 py-4"
          >
            READ THE BLOG
          </Link>
        </div>
        <div className="relative z-10 mx-auto max-w-4xl flex justify-between uppercase text-white font-heading tracking-widest text-sm">
          <Link to="/about" className="border-b border-white">
            FIND OUT MORE
          </Link>
          <Link to="/contact" className="border-b border-white">
            GET IN TOUCH
          </Link>
        </div>
        <img
          src={HeroBg}
          alt="Hero Background"
          className="w-full h-full absolute inset-0 object-cover opacity-70"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="bg-white p-12 md:p-24 flex justify-end items-center">
          <Link to="{{ post.url }}">
            <img src={post1} alt="Post One" className="w-full max-w-md" />
          </Link>
        </div>
        <div className="bg-gray-100 p-12 md:p-24 flex justify-start items-center">
          <div className="max-w-md">
            <div className="w-24 h-2 bg-yellow-800 mb-4"></div>
            <h2 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl mb-6">
              This is my third latest post
            </h2>
            <p className="font-light text-gray-600 text-sm md:text-base mb-6 leading-relaxed">
              Bring to the table win-win survival strategies to ensure proactive
              domination. At the end of the day, going forward, a new normal
              that has evolved from generation X is on the runway heading
              towards a streamlined cloud solution.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-xl mx-auto text-center py-24 md:py-32">
        <div className="w-24 h-2 bg-yellow-800 mb-4 mx-auto"></div>
        <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mb-6">
          We love to travel
        </h2>
        <p className="font-light text-gray-600 mb-6 leading-relaxed">
          Iterative approaches to corporate strategy foster collaborative
          thinking to further the overall value proposition.
        </p>
      </div>
      <div className="flex flex-wrap bg-black">
        <div className="bg-black relative w-full md:w-auto md:flex-1 flex items-center justify-center h-72 font-heading text-white uppercase tracking-widest hover:opacity-75">
          <div className="relative z-10">SANDY BEACHES</div>
          <img
            src={category1}
            alt="Category One"
            className="absolute inset-0 w-full h-full object-cover opacity-50"
          />
        </div>
        <div className="bg-black relative w-full md:w-auto md:flex-1 flex items-center justify-center h-72 font-heading text-white uppercase tracking-widest hover:opacity-75">
          <div className="relative z-10">FOREST TRAILS</div>
          <img
            src={category2}
            alt="Category Two"
            className="absolute inset-0 w-full h-full object-cover opacity-50"
          />
        </div>
        <div className="bg-black relative w-full md:w-auto md:flex-1 flex items-center justify-center h-72 font-heading text-white uppercase tracking-widest hover:opacity-75">
          <div className="relative z-10">CITY STREETS</div>
          <img
            src={category3}
            alt="Category Three"
            className="absolute inset-0 w-full h-full object-cover opacity-50"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="bg-white p-12 md:p-24 flex justify-start items-center">
          <img src={post2} alt="Post Two" className="w-full max-w-md" />
        </div>
        <div className="md:order-first bg-gray-100 p-12 md:p-24 flex justify-end items-center">
          <div className="max-w-md">
            <div className="w-24 h-2 bg-yellow-800 mb-4"></div>
            <h2 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl mb-6">
              This is my second post
            </h2>
            <p className="font-light text-gray-600 text-sm md:text-base mb-6 leading-relaxed">
              Iterative approaches to corporate strategy foster collaborative
              thinking to further the overall value proposition. Organically
              grow the holistic world view of disruptive innovation via
              workplace diversity and empowerment.
            </p>
          </div>
        </div>
      </div>
      <div className="relative w-full py-12 px-12">
        <div className="relative z-10 text-center py-12 md:py-24">
          <h1 className="text-white text-center text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold mb-6">
            Endlessly customizable
          </h1>
          <p className="text-white mb-10 text-base md:text-lg font-bold">
            Organically grow the holistic world view of disruptive innovation
            via workplace diversity and empowerment.
          </p>
          <Link
            to="/blogs"
            className="inline-block bg-yellow-800 text-white uppercase text-sm tracking-widest font-heading px-8 py-4"
          >
            FIND OUT MORE
          </Link>
        </div>
        <img
          src={bottomBg}
          alt=""
          className="w-full h-full absolute inset-0 object-cover"
        />
      </div>
    </>
  )
}

export default Home
