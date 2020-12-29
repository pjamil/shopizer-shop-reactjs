import PropTypes from "prop-types";
import React, { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import { setLoader } from "../../redux/actions/loaderActions";
import { connect } from "react-redux";
import Rating from "../../components/product/sub-components/ProductRating";
import StarRatings from 'react-star-ratings';
const ProductDescriptionTab = ({ spaceBottomClass, product, review, userData }) => {
  const [ratingValue, setRatingValue] = useState(0)
  const getRating = (ratingValue) => {
    let rating = [];
    for (let i = 0; i <= ratingValue - 1; i++) {
      rating.push(i);
    }
    return rating;
  }
  return (
    <div className={`description-review-area ${spaceBottomClass}`}>
      <div className="container">
        <div className="description-review-wrapper">
          <Tab.Container defaultActiveKey="productDescription">
            <Nav variant="pills" className="description-review-topbar">
              <Nav.Item>
                <Nav.Link eventKey="additionalInfo">
                  Additional Information
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="productDescription">Description</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="productReviews">Reviews(2)</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content className="description-review-bottom">
              <Tab.Pane eventKey="additionalInfo">
                <div className="product-anotherinfo-wrapper">
                  <ul>
                    <li>
                      <span>Weight</span> {product.productSpecifications.weight} kg
                    </li>
                    <li>
                      <span>Dimensions</span>{product.productSpecifications.length}{" "} x {product.productSpecifications.width}{" "}
                      x {product.productSpecifications.height} cm{" "}
                    </li>
                    {/* <li>
                      <span>Materials</span> 60% cotton, 40% polyester
                    </li>
                    <li>
                      <span>Other Info</span> American heirloom jean shorts pug
                      seitan letterpress
                    </li> */}
                  </ul>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="productDescription">
                <p dangerouslySetInnerHTML={{ __html: product.description.description }}></p>
              </Tab.Pane>
              <Tab.Pane eventKey="productReviews">
                <div className="row">
                  <div className="col-lg-7">
                    {
                      review.map((a, key) => {
                        return (<div className="review-wrapper" key={key}>
                          <div className="single-review">
                            <div className="review-img">
                              <img src={process.env.PUBLIC_URL + "/assets/img/testimonial/1.jpg"} alt="" />
                            </div>
                            <div className="review-content">
                              <div className="review-top-wrap">
                                <div className="review-left">
                                  <div className="review-name">
                                    <h4>{a.customer.firstName} {a.customer.lastName}</h4>
                                  </div>
                                  <div className="pro-details-rating-wrap">
                                    <div className="pro-details-rating">
                                      <Rating ratingValue={a.rating} />
                                    </div>
                                  </div>
                                </div>
                                <div className="review-left">
                                  <button>{a.date}</button>
                                </div>
                              </div>
                              <div className="review-bottom">
                                <p>
                                  {a.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        )
                      })

                    }
                  </div>
                  {
                    userData ?
                      <div className="col-lg-5">
                        <div className="ratting-form-wrapper pl-50">
                          <h3>Add a Review</h3>
                          <div className="ratting-form">
                            <form action="#">
                              <div className="star-box">
                                <span>Your rating:</span>
                                {/* <div className="pro-details-rating-wrap">
                                  <div className="pro-details-rating"> */}
                                <StarRatings
                                  rating={ratingValue}
                                  starRatedColor="#ffa900"
                                  starDimension="17px"
                                  starSpacing="1px"
                                  changeRating={(e) => setRatingValue(e)}
                                  numberOfStars={5}
                                  name='rating'
                                />
                                {/* <Rating ratingValue={0} /> */}
                                {/* </div>
                                </div> */}
                              </div>
                              <div className="row">
                                {/* <div className="col-md-6">
                                  <div className="rating-form-style mb-10">
                                    <input placeholder="Name" type="text" />
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="rating-form-style mb-10">
                                    <input placeholder="Email" type="email" />
                                  </div>
                                </div> */}
                                <div className="col-md-12">
                                  <div className="rating-form-style form-submit">
                                    <textarea
                                      name="Your Review"
                                      placeholder="Message"
                                      defaultValue={""}
                                    />
                                    <input type="submit" defaultValue="Submit" />
                                  </div>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                      :
                      <div></div>
                  }

                </div>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
      </div>
    </div>
  );
};

ProductDescriptionTab.propTypes = {
  product: PropTypes.object,
  review: PropTypes.array,
  spaceBottomClass: PropTypes.string
};

const mapStateToProps = (state) => {
  return {
    userData: state.userData.userData
  };
};
const mapDispatchToProps = dispatch => {
  return {
    setLoader: (value) => {
      dispatch(setLoader(value));
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(ProductDescriptionTab);
// export default ProductDescriptionTab;
