import React from 'react';
import errorImg from "../../assets/error.jpg";

function List({ data }) {
  if (data === undefined || data.length === 0) {
    return <div>Error</div>;
  }

  return (

      <div className="row row-cols-1 row-cols-md-4">
        {data.map((restaurant, index) => (
            
          <div className="col mb-4" key={index}>
             <a className='a_deff' href={restaurant.id}>
                    <div className="card h-100">

                    <img
                        src={restaurant.images.length !== 0 ? "http://127.0.0.1:8000/storage/" + restaurant.images[0].path : errorImg}
                        className="card-img-top h-10"
                        style={{height: '300px'}}
                        alt={restaurant.type}
                    />
                    <div className="card-body">
                        <h5 className="card-title">{restaurant.name} <span className="card-text badge bg-danger " style={{fontSize: '10px'}}>{restaurant.type}</span></h5>
                            

                 
                        <p className="card-text">Price: ${restaurant.price}</p>
                    
                        <div className=" fw-bold text-primary">
                            {[...Array(5)].map((star, index) => {
                                const ratingValue = index + 1;
                                return (
                                    <span  key={index} style={{ fontSize: '20px', color: '#9f00ff'}}>
                                             {ratingValue <= restaurant.rating ? '★' : '☆'}
                                      </span>
                                );
                            })}
                        </div>
                         
                       
                       
                    </div>
                    </div>
             </a>
          </div>
        ))}
    </div>
  );
}

export default List;
