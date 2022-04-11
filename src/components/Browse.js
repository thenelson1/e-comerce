import React from 'react'
import comfortImg from "/home/thenelson/Desktop/frontend/projects/reactApps/e-commerce/src/images/browse1.jpg";
import styleImg from "/home/thenelson/Desktop/frontend/projects/reactApps/e-commerce/src/images/browse2.jpg";


const Browse = () => {
  return (
    <section className='browse-styles'>
        <div className="comfort-air browse">
            <img src={styleImg} alt="" />
            <div className="style-text">
                <h2>comfort air</h2>
                <h5>Experience the only living chair</h5>
                <a href="#" className="browse-style-btn">browse styles</a>
            </div>
        </div>

         <div className="style-motion browse">
             <img src={styleImg} alt="" />
            <div className="style-text">
                <h2>style in motion</h2>
                <h5>Experience Relaxation Refined</h5>
                <a href="#" className="browse-style-btn">browse styles</a>
            </div>
        </div>
    </section>
  )
}

export default Browse