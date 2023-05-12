import React from 'react';
import Form from './components/Form';
import './App.css';
import Card from './components/Card';
import logo from './logo_tryunfo.png';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: 0,
    cardAttr2: 0,
    cardAttr3: 0,
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
    cardList: [],
  };

  toggleSaveButtonStatus = () => {
    const maxIndv = 90;
    const maxSum = 210;
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare } = this.state;

    return !((cardName !== ''
      && cardDescription !== ''
      && cardImage !== ''
      && cardRare !== ''
       && (Number(cardAttr1) >= 0 && Number(cardAttr1) <= maxIndv)
          && (Number(cardAttr2) >= 0 && Number(cardAttr2) <= maxIndv)
          && (Number(cardAttr3) >= 0 && Number(cardAttr3) <= maxIndv)
          && (Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3)
          <= maxSum)));
  };

  handleCheckboxChange = ({ target }) => {
    const cardTrunfo = !!target.checked; // Converte para um valor booleano
    this.setState({ cardTrunfo });
    this.setState({ hasTrunfo: true });
  };

  onSaveButtonClick = (event) => {
    event.preventDefault();
    const newCard = { ...this.state };
    this.setState((prev) => ({
      cardList: [...prev.cardList, newCard],
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
    }));
  };

  /*   checkTrunfo = ({target}) => {
   this.setState({
    hasTrunfo: true
   })
  } */

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checked' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <>
        <img src={ logo } alt="Tryunfo" />
        <section className="addCardForm">
          <Form
            { ...this.state }
            isSaveButtonDisabled={ this.toggleSaveButtonStatus() }
            onInputChange={ this.onInputChange }
            onSaveButtonClick={ this.onSaveButtonClick }
            handleCheckboxChange={ this.handleCheckboxChange }
          />
          <Card
            { ...this.state }
          />
        </section>
      </>
    );
  }
}

export default App;
