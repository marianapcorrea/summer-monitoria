import React, { Component } from 'react';

export default class Form extends Component {
  render() {
    return (
      <>
        <h2>ADICIONE NOVA CARTA</h2>
        <form>
          <label htmlFor="name">
            Nome
            <input id="name" type="text" data-testid="name-input" />
          </label>
          <label htmlFor="description">
            Descrição
            <input id="description" type="textarea" data-testid="description-input" />
          </label>
          <label htmlFor="attr1">
            Attr01
            <input id="attr1" type="number" data-testid="attr1-input" />
          </label>
          <label htmlFor="attr2">
            Attr02
            <input id="attr2" type="number" data-testid="attr2-input" />
          </label>
          <label htmlFor="attr3">
            Attr03
            <input id="attr3" type="number" data-testid="attr3-input" />
          </label>
          <label htmlFor="image">
            Imagem
            <input id="image" type="text" data-testid="image-input" />
          </label>
          <label htmlFor="rarity">
            Raridade
            <select type="select" id="rarity" data-testid="rare-input">
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito Raro</option>
            </select>
          </label>
          <label htmlFor="trunfo">
            Super Trybe Trunfo
            <input id="trunfo" type="checkbox" data-testid="trunfo-input" />
          </label>
          <button type="submit" data-testid="save-button">Salvar</button>

        </form>
      </>
    );
  }
}
