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
    cardRare: '',
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: true,
  };

  onInputChange = ({ target }) => {
    const { name, value } = target;

    this.setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  render() {
    return (
      <>
        <img src={ logo } alt="Tryunfo" />
        <section className="addCardForm">
          <Form onInputChange={ this.onInputChange } />
          <Card />
        </section>
      </>
    );
  }
}

export default App;
