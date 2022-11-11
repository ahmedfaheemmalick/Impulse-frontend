import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className="bg-yellow-900 text-white text-opacity-40 font-semibold uppercase text-xs tracking-widest px-12">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-4 gap-12 text-center lg:text-left py-24">
        <div>
          <div className="text-white text-4xl font-display">impulse</div>
        </div>
        <div>
          <div className="font-display text-white uppercase text-sm tracking-widest mb-6">
            More info
          </div>
          <Link to="/#" className="block mb-4">
            About
          </Link>
          <Link to="/#" className="block mb-4">
            Info
          </Link>
          <Link to="/#" className="block mb-4">
            FAQ
          </Link>
        </div>
        <div>
          <div className="font-display text-white uppercase text-sm tracking-widest mb-6">
            Helpful Links
          </div>
          <Link to="/#" className="block mb-4">
            About
          </Link>
          <Link to="/#" className="block mb-4">
            Info
          </Link>
          <Link to="/#" className="block mb-4">
            FAQ
          </Link>
        </div>
        <div>
          <div className="font-display text-white uppercase text-sm tracking-widest mb-6">
            Find out more
          </div>
          <Link to="/#" className="block mb-4">
            About
          </Link>
          <Link to="/#" className="block mb-4">
            Info
          </Link>
          <Link to="/#" className="block mb-4">
            FAQ
          </Link>
        </div>
      </div>
      <div className="text-sm lg:text-base text-center font-heading font-light tracking-widest uppercase text-white opacity-75 pb-24">
        All rights reserved © 2021
      </div>
    </div>
  )
}

export default Footer
