import React from 'react'
// react icons
import { GiArchiveResearch } from "react-icons/gi";
import { LiaToolsSolid } from 'react-icons/lia';
import { FaUserGroup } from "react-icons/fa6";

const hero = () => {
      return (
            <>
                  <section className="relative  bg-blueGray-50">
                        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
                        <div className="absolute top-5 w-full h-full bg-center bg-cover" style={{ backgroundImage: "url('/tc.jpg')", borderRadius:"0px" }}>
                              <span id="blackOverlay" className="w-full h-full absolute opacity-50 bg-black"></span>
                              </div>

                              <div className="container relative mx-auto ">
                                    <div className="items-center flex flex-wrap ">
                                          <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                                                <div className="text-center flex flex-col justify-end items-center">
                                                      <div className="text-white font-semibold text-5xl">
                                                            Tri-Chandra Research Group
                                                      </div>
                                                      <div className="mt-4 text-lg bg-slate-50  rounded-md p-4 dark:bg-slate-950 bg-opacity-40 dark:bg-opacity-40 text-black dark:text-white">
                                                      Tri-Chandra Research Group advances science through research, innovation, and collaboration in physics, technology, and environmental sciences.
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                              <div className="top-auto bottom-0  left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px" style={{ transform: "translateZ(0px)" }}>
                                    <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
                                          <polygon className="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
                                    </svg>
                              </div>
                        </div>
                              <section className="pb-10 bg-blueGray-200 -mt-24">
                                    <div className="container mx-auto px-4">
                                          <div className="flex flex-wrap">
                                                <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                                                      <div className="relative flex flex-col min-w-0 break-words bg-white dark:bg-slate-950 border border-solid border-black/[.08] dark:border-white/[.145] w-full mb-8 shadow-lg rounded-lg">
                                                            <div className="px-4 py-5 flex-auto">
                                                                  <div className="text-black p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">                                                                        
                                                                        <GiArchiveResearch />
                                                                  </div>
                                                                  <h6 className="text-xl font-semibold">Research</h6>
                                                                  <p className="mt-2 mb-4 text-black dark:text-white">
                                                                  We conduct interdisciplinary research in plasma physics, quantum computing, and atmospheric sciences, advancing knowledge with practical applications.
                                                                  </p>
                                                            </div>
                                                      </div>
                                                </div>

                                                <div className="w-full md:w-4/12 px-4 text-center">
                                                      <div className="relative flex flex-col min-w-0 break-words  dark:bg-slate-950 border border-solid border-black/[.08] dark:border-white/[.145] bg-white w-full mb-8 shadow-lg rounded-lg">
                                                            <div className="px-4 py-5 flex-auto">
                                                                  <div className="text-black p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                                                                        <LiaToolsSolid />
                                                                  </div>
                                                                  <h6 className="text-xl font-semibold">Innovation </h6>
                                                                  <p className="mt-2 mb-4 text-black dark:text-white">
                                                                  We drive innovation through cutting-edge technology and open-source projects, solving real-world challenges.
                                                                  </p>
                                                            </div>
                                                      </div>
                                                </div>
                                                
                                                 <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                                                      <div className="relative flex flex-col min-w-0 break-words bg-white dark:bg-slate-950 border border-solid border-black/[.08] dark:border-white/[.145] w-full mb-8 shadow-lg rounded-lg">
                                                            <div className="px-4 py-5 flex-auto">
                                                                <div className="text-black p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                                                                  <FaUserGroup />
                                                                  </div>
                                                                  <h6 className="text-xl font-semibold">Collaboration</h6>
                                                                  <p className="mt-2 mb-4 text-black dark:text-white">
                                                                  Collaboration is key to our success, partnering with institutions and industries to foster knowledge exchange and breakthrough research.
                                                                  </p>
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                              </section>
                  </section>
            </>
      )
}

export default hero