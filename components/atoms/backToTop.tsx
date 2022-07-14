import React from 'react'

const BackToTop = () => {
  return (
    <button className='bg-rai-green text-rai-black rounded w-fit p-2 m-auto'
            onClick={() => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth' // for smoothly scrolling
                  });
            }}>
        <span className="material-symbols-outlined pr-2">
            arrow_upward
        </span>
        Return to Top
    </button>
  )
}

export default BackToTop