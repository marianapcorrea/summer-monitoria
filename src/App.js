import React from 'react';
import Form from './components/Form';
import './App.css';
import Card from './components/Card';
import logo from './logo_tryunfo.png';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
    cardList: [],
    showDeck: false,
  };

  toggleSaveButtonStatus = () => {
    const maxIndv = 90;
    const maxSum = 210;
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare } = this.state;

    return !((
      cardName !== ''
      && cardDescription !== ''
      && cardImage !== ''
      && cardRare !== ''
       && (Number(cardAttr1) >= 0 && Number(cardAttr1) <= maxIndv)
          && (Number(cardAttr2) >= 0 && Number(cardAttr2) <= maxIndv)
          && (Number(cardAttr3) >= 0 && Number(cardAttr3) <= maxIndv)
          && (Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3)
          <= maxSum)));
  };

  onSaveButtonClick = (event) => {
    event.preventDefault();
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo } = this.state;
    const newCard = { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo };
    this.setState((prev) => ({
      cardList: [...prev.cardList, newCard],
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      showDeck: true,
    }));
  };

  onInputChange = ({ target }) => {
    const { name, type } = target;
    const value = type === 'checkbox'
      ? target.checked
    && this.setState({ cardTrunfo: true, hasTrunfo: true })
      : target.value;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { cardList, showDeck } = this.state;
    return (
      <>
        <img src={ logo } alt="Tryunfo" />
        <section className="addCardForm">
          <Form
            { ...this.state }
            isSaveButtonDisabled={ this.toggleSaveButtonStatus() }
            onInputChange={ this.onInputChange }
            onSaveButtonClick={ this.onSaveButtonClick }
            // handleCheckboxChange={ this.handleCheckboxChange }
          />
          <Card
            { ...this.state }
            onInputChange={ this.onInputChange }

          />
        </section>
        <section>
          {showDeck && cardList
            .map((card) => <Card key={ card.cardName } { ...card } />)}
        </section>
      </>
    );
  }
}

export default App;
