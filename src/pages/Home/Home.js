import React from 'react';
import dummy from '../../assets/images/dummy.jpeg';
import {Link} from "react-router-dom";

function Home(){
// create a array of object- 
  let obj = [
    {
        image: dummy,
        heading: 'MEN SHOES COLLECTION',
        para: 'Constructed from luxury nylons, leathers, and custom hardware, featuring sport details such as hidden breathing vents, waterproof + antimicrobial linings, and more.',
        btnText: 'Shop Men',
        link: 'products'
    },
    {
        image: dummy,
        heading: 'Woman SHOES COLLECTION',
        para: 'Constructed from luxury nylons, leathers, and custom hardware, featuring sport details such as hidden breathing vents, waterproof + antimicrobial linings, and more.',
        btnText: 'Shop woman',
        link: 'products'
    },
    {
        image: dummy,
        heading: 'kids SHOES COLLECTION',
        para: 'Constructed from luxury nylons, leathers, and custom hardware, featuring sport details such as hidden breathing vents, waterproof + antimicrobial linings, and more.',
        btnText: 'Shop kids',
        link: 'products'
    }
]
    return(
      <>
      <div className="mt-15">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 page-width">
              {
//using the map function and data showing the same page-
                  obj.map((item ,index) => (
                      <div key={index}>
                          <div className="text-center"><img src={item.image} alt="" /></div>
                          <h3 className="h4 uppercase mt-1 mb-1">{item.heading}</h3>
                          <div className="mb-1">
                              <p>{item.para}</p>
                          </div>
                          <Link to={`/${item.link}`}  className="button primary">
                              <span>{item.btnText}</span>
                              <br></br>
                              </Link>
                      </div>
                  ))
              }
          </div>
      </div>
  </>
    )
}

export default Home;