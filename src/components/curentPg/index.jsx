import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import errorImg from "../../assets/error.jpg";

import StarRating from "@component/StarRating"

function curentPg() {

  const { id } = useParams();

  const [data, setdata] = useState([])




  useEffect(() => {
       axios.get(`http://127.0.0.1:8000/api/restaurants/${id}`).then(function (response) 
       {

        setdata(response.data[0]) 
       }
       ).catch((err) => console.log(err))
  }, [])


  const [userRating, setUserRating] = useState(0);

  const handleRatingChange = async (newRating) => {
    console.log(newRating);
    setUserRating(newRating);

    axios.post('http://127.0.0.1:8000/api/restaurants/star/add', {
        restaurant_id: parseInt(id),
        rating: newRating,
        comment: null,
    })
    .then(response => {
        console.log(response.data); 
    })
    .catch(error => {
        console.error('Ошибка:', error);
    });
    
  };



  if (data.length === 0) {
    return <div>Loading...</div>;
  } else {


    return (
        <div className="container mt-5 d-flex justify-content-center">
          <div className="row w-100">
            <div className="col-md-5">
              <img
                src={data.images.length !== 0 ? "http://127.0.0.1:8000/storage/" + data.images[0].path : errorImg}
                className="card-img-top h-5"
                alt={data.type}
              />

<div className="col-md-6">
            <h3>Reviews</h3>
            <div>
      {data.reviews.map((review, index) => (
        <div key={index} className="card mb-3">
          <div className="card-body">
                    <h5 className="card-title">Rating: {review.rating}</h5>
                    <p className="card-text">{review.comment}</p>
                </div>
                </div>
            ))}
            </div>
        </  div>
            </div>
            <div className="col-md-7">
              <div className="row w-100">
                <div className="col-12 row row-cols-12  d-flex justify-content-between">
                  <div className="col-md-5 fw-bolder fs-4">{data.name}</div>
                  <div className="col-md-5">Type: <span className='badge bg-danger'>{data.type}</span></div>
                </div>
                <div className="col-12 fw-bold text-primary">
                  {[...Array(5)].map((star, index) => {
                    const ratingValue = index + 1;
                    return (
                      <span key={index} style={{ fontSize: '20px' }}>
                        {ratingValue <= data.rating ? '★' : '☆'}
                      </span>
                    );
                  })}
                </div>
                <div className="col-12">
                  <p>{data.about}</p>
                  <div className="col-md-6">
                    {data.price} $
                  </div>
                  <div className="col-md-6 my-5">
                         <span style={{fontSize: '20px'}}>оцените:</span>
                    <div className="cursor-pointer">
                         <StarRating initialRating={userRating} onRatingChange={handleRatingChange} />
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
          
        </div>
      );
  }


}
export default curentPg