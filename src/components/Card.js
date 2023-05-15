import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Card extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      onInputChange,
    } = this.props;
    return (
      <section>
        <h3 data-testid="name-card" onChange={ onInputChange }>{cardName}</h3>
        <img
          src={ cardImage }
          alt={ cardName }
          data-testid="image-card"
          onChange={ onInputChange }
        />
        <p data-testid="description-card" onChange={ onInputChange }>{cardDescription}</p>
        <p data-testid="attr1-card" onChange={ onInputChange }>{cardAttr1}</p>
        <p data-testid="attr2-card" onChange={ onInputChange }>{cardAttr2}</p>
        <p data-testid="attr3-card" onChange={ onInputChange }>{cardAttr3}</p>
        <p data-testid="rare-card" onChange={ onInputChange }>{cardRare}</p>
        {cardTrunfo
        && <span data-testid="trunfo-card" onChange={ onInputChange }>Super Trunfo</span>}

      </section>
    );
  }
}

Card.propTypes = {

  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,

};
