import * as React from 'react'
import { Link } from 'react-router-dom'
import { Image } from 'react-bootstrap'

export const MatrixCellWithLink = ({ linkTo, image, text }) => {
  return (
    <div className='square light-grey-background greyscale'>
      <Link to={linkTo}>
        <div className='square-content'>
          <div className='table'>
            <div className='table-cell text-big'>
              {image && <Image src={image} rounded className='responsive-img' />}
              {text && <span>{text}</span>}
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}