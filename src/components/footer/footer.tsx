import React from 'react'
import Link from 'next/link'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaWhatsapp, FaYoutube } from 'react-icons/fa'

const footer = () => {
  return (
    <>
      <footer className="relative bg-gray-100 dark:bg-slate-950 pt-8 pb-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-left lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-2xl font-bold text-blueGray-700">Tri-Chandra Research Group</h4>
              <h5 className="text-md mt-0 mb-2 text-blueGray-600">
               <p className='text-stone-950 dark:text-gray-200'> Innovate, Learn, Share. Join us in exploring new horizons through collaborative research. </p> 
                Tri-Chandra Multiple Campus, <br />
                Ghantaghar, Kathmandu, Nepal <br />
              </h5>
              <div className="mt-6 lg:mb-0 mb-6 flex gap-3">
              <FaFacebook className='text-xl text-blue-600 hover:scale-95 h-6 w-6 ' />
              <FaInstagram className='text-xl text-pink-600 hover:scale-95 h-6 w-6' />
              <FaGithub className='text-xl text-dark-600 hover:scale-95 h-6 w-6' />
              <FaLinkedin className='text-xl text-blue-600 hover:scale-95 h-6 w-6' />
              <FaYoutube className='text-xl text-red-600 hover:scale-95 h-6 w-6' />
              <FaWhatsapp className='text-xl text-green-600 hover:scale-95 h-6 w-6' />
              </div>
            </div>
            <div className="w-full md:w-6/12 px-4">
              <div className="flex flex-row items-top mt-3 mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-blueGray-500 text-sm font-bold mb-2">Useful Links</span>
                  <ul className="list-unstyled">
                    <li>
                      <a className="text-blueGray-600 hover:text-blueGray-800 font-normal block pb-2 text-sm" href="/about">About Us</a>
                    </li>
                    <li>
                      <a className="text-blueGray-600 hover:text-blueGray-800 font-normal block pb-2 text-sm" href="/blog">Blog</a>
                    </li>
                    <li>
                      <a className="text-blueGray-600 hover:text-blueGray-800 font-normal block pb-2 text-sm" href="https://www.github.com/tcresearchgroup">Github</a>
                    </li>
                    <li>
                      <a className="text-blueGray-600 hover:text-blueGray-800 font-normal block pb-2 text-sm" href="https://triscan.tcresearchgroup.edu.np">TriScan</a>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <span className="block uppercase text-blueGray-500 text-sm font-bold mb-2">Others</span>
                  <ul className="list-unstyled">
                    <li>
                      <a className="text-blueGray-600 hover:text-blueGray-800 font-normal block pb-2 text-sm" href="https://github.com/tcresearchgroup">MIT License</a>
                    </li>
                    <li>
                      <a className="text-blueGray-600 hover:text-blueGray-800 font-normal block pb-2 text-sm" href="#">Terms &amp; Conditions</a>
                    </li>
                    <li>
                      <a className="text-blueGray-600 hover:text-blueGray-800 font-normal block pb-2 text-sm" href="#">Privacy Policy</a>
                    </li>
                    <li>
                      <a className="text-blueGray-600 hover:text-blueGray-800 font-normal block pb-2 text-sm" href="mailto:trichandraresearchgroup@gmail.com">Contact Us</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-blueGray-300"></hr>
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-blueGray-500 py-1">
                Copyright © <span id="get-current-year">{new Date().getFullYear()}</span>
                 <Link href="https://www.facebook.com/TriChandraResearchGroup" className="text-blueGray-500 font-semibold hover:text-gray-600 dark:hover:text-blue-300" target="_blank"> Tri-Chandra Research Group
                 </Link>

              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default footer