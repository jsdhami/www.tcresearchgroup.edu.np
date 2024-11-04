import React from 'react'

const playlist = () => {
     return (
          <>
               <div className="flex relative flex-wrap border border-black/[.2] dark:border-white/[.2] rounded-md justify-around gap-2 items-center p-8 m-2 mx-4">
                    <div className="flex rounded-md hover:shadow-md dark:hover:shadow-gray-300 dark:hover:shadow-sm border border-solid border-black/[.2] dark:border-white/[.2]  p-2">
                         <iframe className='rounded-md aspect-video' src="https://www.youtube.com/embed/NxzADuT10fE" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                    <div className="flex rounded-md hover:shadow-md dark:hover:shadow-gray-300 dark:hover:shadow-sm border border-solid border-black/[.2] dark:border-white/[.2]  p-2">
                         <iframe className='rounded-md aspect-video' src="https://www.youtube.com/embed/gB3r4i0lKOw" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                    <div className="flex rounded-md hover:shadow-md dark:hover:shadow-gray-300 dark:hover:shadow-sm border border-solid border-black/[.2] dark:border-white/[.2]  p-2">
                         <iframe className='rounded-md aspect-video' src="https://www.youtube.com/embed/vvaN1QtNAC0" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                    <div className="flex rounded-md hover:shadow-md dark:hover:shadow-gray-300 dark:hover:shadow-sm border border-solid border-black/[.2] dark:border-white/[.2]  p-2">
                         <iframe className='rounded-md aspect-video' src="https://www.youtube.com/embed/2L-rjopwIaI" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                    <div className="flex rounded-md hover:shadow-md dark:hover:shadow-gray-300 dark:hover:shadow-sm border border-solid border-black/[.2] dark:border-white/[.2]  p-2">
                         <iframe className='rounded-md aspect-video' src="https://www.youtube.com/embed/i_XO4suyBNI" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                    <div className="flex rounded-md hover:shadow-md dark:hover:shadow-gray-300 dark:hover:shadow-sm border border-solid border-black/[.2] dark:border-white/[.2]  p-2">
                         <iframe className='rounded-md aspect-video' src="https://www.youtube.com/embed/T6ricCmCO4M" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                    <div className="flex rounded-md hover:shadow-md dark:hover:shadow-gray-300 dark:hover:shadow-sm border border-solid border-black/[.2] dark:border-white/[.2]  p-2">
                         <iframe className='rounded-md aspect-video' src="https://www.youtube.com/embed/Qu4Ipfwmbo8" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                    <div className="absolute z-10 -top-4 left-2 border border-solid dark:border-white/[.2] font-normal rounded-md bg-gray-900 p-2 text-sm text-white ">
                         LaTeX Workshop | Recorded Videos
                    </div>

               </div>
          </>
     )
}

export default playlist