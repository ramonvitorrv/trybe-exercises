import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render() {
    const { pokemon: { name, type, averageWeight, image }} = this.props
    return (
    <div className='pokemon'>
      <div>
        <p>{ name} </p>
        <p>{ type }</p>
        <p>
          {`Average weight: ${averageWeight.value} ${averageWeight.measurementUnit}`}
        </p>
        <img src={ image } alt={ `${name} sprite`}></img>
      </div>
    </div>
    )
  }
}

Pokemon.prototypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      measurementUnit: PropTypes.string,
      value: PropTypes.string,
    }),
    image: PropTypes.string,
  }).isRequired,
}

export default Pokemon;