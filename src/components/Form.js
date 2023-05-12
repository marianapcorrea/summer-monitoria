import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Form.css';

export default class Form extends Component {
/*   checkTrunfoStatus = (cardList) => cardList
    .find(({ cardTrunfo }) => (cardTrunfo === 'on'));
 */
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, hasTrunfo, isSaveButtonDisabled,
      onInputChange, onSaveButtonClick, cardList, handleCheckboxChange } = this.props;

    // console.log(this.checkTrunfoStatus(cardList));
    console.log(cardList);
    return (
      <>
        <h2>ADICIONE NOVA CARTA</h2>
        <form>
          <label htmlFor="name">
            Nome
            <input
              className="borderBottom"
              id="name"
              name="cardName"
              type="text"
              data-testid="name-input"
              onChange={ onInputChange }
              value={ cardName }
            />
          </label>
          <label htmlFor="description">
            Descrição
            <input
              className="borderBottom"
              id="description"
              name="cardDescription"
              type="textarea"
              data-testid="description-input"
              rows="5"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="Attr1">
            Attr01
            <input
              id="Attr1"
              name="cardAttr1"
              type="number"
              data-testid="attr1-input"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="Attr2">
            Attr02
            <input
              id="Attr2"
              name="cardAttr2"
              type="number"
              data-testid="attr2-input"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="Attr3">
            Attr03
            <input
              id="Attr3"
              name="cardAttr3"
              type="number"
              data-testid="attr3-input"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="image">
            Imagem
            <input
              id="image"
              name="cardImage"
              type="text"
              data-testid="image-input"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="rarity">
            Raridade
            <select
              type="select"
              id="rarity"
              name="cardRare"
              data-testid="rare-input"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option
                value="normal"
              >
                Normal

              </option>
              <option
                value="raro"
              >
                Raro

              </option>
              <option
                value="muito raro"
              >
                Muito Raro

              </option>
            </select>
          </label>
          {hasTrunfo === false ? (
            <label htmlFor="trunfo">
              Super Trybe Trunfo
              <input
                id="trunfo"
                name="cardTrunfo"
                type="checkbox"
                data-testid="trunfo-input"
                checked={ cardTrunfo }
                onChange={ handleCheckboxChange }
              />

            </label>)
            : (
              <p htmlFor="trunfo" data-testid="trunfo-input">
                Você já tem um Super Trunfo em seu baralho
              </p>)}
          <button
            type="submit"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar

          </button>

        </form>
      </>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
  handleCheckboxChange: PropTypes.func.isRequired,
  cardList: PropTypes.arrayOf(
    PropTypes.shape({
      cardName: PropTypes.string,
      cardDescription: PropTypes.string,
      cardAttr1: PropTypes.string,
      cardAttr2: PropTypes.string,
      cardAttr3: PropTypes.string,
      cardImage: PropTypes.string,
      cardRare: PropTypes.string,
      cardTrunfo: PropTypes.bool,
      hasTrunfo: PropTypes.bool,
      isSaveButtonDisabled: PropTypes.bool,
    }),
  ).isRequired,

};
