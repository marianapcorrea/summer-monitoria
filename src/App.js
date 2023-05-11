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

  };

  toggleSaveButtonStatus = () => {
    const maxIndv = 90;
    const maxSum = 210;
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare } = this.state;
    if (
      cardName !== ''
      && cardDescription !== ''
      && cardImage !== ''
      && cardRare !== ''
       && (Number(cardAttr1) >= 0 && Number(cardAttr1) <= maxIndv)
          && (Number(cardAttr2) >= 0 && Number(cardAttr2) <= maxIndv)
          && (Number(cardAttr3) >= 0 && Number(cardAttr3) <= maxIndv)
          && (Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3)
          <= maxSum)) {
      console.log('works');
      return false;
    }
    return true;
  };

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
