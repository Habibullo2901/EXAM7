import React from 'react'
import { useSelector } from 'react-redux'
import Footer from '../../components/Footer'
import { MdOutlineStar } from "react-icons/md";
import { IoHeart } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { removeSelect } from '../../redux/actionsSlice';
import { addLike } from '../../redux/actionsSlice';

const Bag = () => {
  const bag = useSelector(state => state.actions.selects)
  console.log(bag)

  const dispatch = useDispatch()
  const handleLikeProduct = (product) => {
    dispatch(addLike(product))
  }

  const handleSelectProduct = (id) => {
    dispatch(removeSelect(id))

  }
  return (
    <div>
      <div className='blush'>
        <p>Selected products</p>
        <p className='blush_count'>{bag && bag.length} items</p>
        <div className='blush-cards'>
          {
            bag &&
            bag.map(product => (
              <div className='product-cardcont' key={product.id}>
                <div className='blush-card' onClick={() => window.location.href = `/blush/${product.id}`}>
                  <img src={product.api_featured_image} alt="" />
                  <div><p className='brand'>{product.brand}</p> </div>
                  <p>{product.name}</p>
                  <p>{product.rating} <MdOutlineStar /><MdOutlineStar /><MdOutlineStar /><MdOutlineStar /><MdOutlineStar /></p>
                  <p>{product.price} {product.currency}</p>
                </div>
                <div className='like' onClick={() => handleLikeProduct(product)} ><IoHeart className='heart' onClick={() => handleLikeProduct(product)} /></div>
                <button className='add-product' onClick={ () => handleSelectProduct(product.id)}>Remove</button>
              </div>
            ))
          }
        </div>
        <p className='almay_count2'>{bag && bag.length} of {bag && bag.length} items</p>
      </div>
      <Footer />
    </div>
  )
}

export default Bag