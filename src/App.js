import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Shop from './components/Shop'
import Cart from './components/Cart'
import './App.css'

class App extends Component {
  state = {
    games: [{
        id: 1,
        title: 'Ryse',
        description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
        image: 'img/ryse.jpeg',
        price: 19.95
      },
      {
        id: 2,
        title: 'Amnesia',
        description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
        image: 'img/amnesia.jpeg',
        price: 29.95
      },
      {
        id: 3,
        title: 'Avatar',
        description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
        image: 'img/avatar.jpeg',
        price: 39.95
      },
      {
        id: 4,
        title: 'Horizon Zero Dawn',
        description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
        image: 'img/horizonzerodawn.jpeg',
        price: 39.95
      },
      {
        id: 5,
        title: 'Just cause 2',
        description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
        image: 'img/justcause.jpeg',
        price: 49.95
      },
      {
        id: 6,
        title: 'Project Cars',
        description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
        image: 'img/projectcars.jpeg',
        price: 29.95
      },
      {
        id: 7,
        title: 'Prototype 2',
        description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
        image: 'img/prototype2.jpeg',
        price: 39.95
      },
      {
        id: 8,
        title: 'Trine',
        description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
        image: 'img/trine.jpeg',
        price: 49.95
      },
      {
        id: 9,
        title: 'Watch Dogs',
        description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
        image: 'img/watchdogs.jpeg',
        price: 19.95
      }
    ],
    cart: []    // Shopping cart
  }

  /*
   * Add a game to the cart
   */ 
  addToCart = (id) => {
    const gameToAdd = this.state.games.find((game) => {
      return id === game.id
    })

    const cart_game = {
      ...gameToAdd,
      amount: 1
    }

    const old_cart = this.state.cart;
    
    // BEGIN van de oplossing

    /* De array old_cart bevat standaard een method als findIndex
     * daarvoor zorgt JavaScript (ES6). Deze gebruiken we om in de
     * array old_cart te zoeken naar een game met de gegeven ID
     * (argument van de method addToCart).
     */
    const index_of_game = old_cart.findIndex(
      // findIndex heeft een function nodig om de voorwaarde te checken
      // Dit doen we in de vorm van een arrow-function
      // Elk element in old_cart wordt doorgegeven aan de arrow-function
      // als argument game. In de body van de arrow-function vergelijken
      // we dan de ID van de game met de ID die we binnenkregen in addToCart
      (game) => {
        return game.id === id     // Voorwaarde
      }
    )

    /* Als findIndex de game niet in de array old_cart kan vinden
     * geeft deze method (findIndex) de waarde -1 terug.
     * Dus in de onderstaande if-statement checken op de waarde -1
     * want dan weten we dat de game nog niet in de cart zit
     * en dat we deze met .push moeten toevoegen aan de array
     */
    if (index_of_game === -1)   // Game zit nog niet in de shopping cart
      old_cart.push(cart_game)  // Dus voegen deze hier toe
    else                        // Game zit al in de shopping cart
      old_cart[index_of_game].amount++  // Dus verhogen we het aantal

    // EINDE van de oplossing

    this.setState({
      cart: old_cart
    });
  }

  /*
   * Count the items in the shopping cart
   * @DONE: Change the count method based on adjusting the amount of a game
   */
  cartCount = () => {
    // Dit is een oplossing om de aantallen per game bij elkaar
    // op te tellen
    let total_amount = 0;

    for (let index = 0; index < this.state.cart.length; index++) 
      total_amount += this.state.cart[index].amount
    
    return total_amount
  }

  /*
   *  Render this component
   */
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <>
            <Header count={this.cartCount()}/>
            <Route 
              exact path='/'
              render={() => <Shop
                games={this.state.games}
                addToShoppingCart={this.addToCart}
              />}
            />
            <Route
              path='/cart'
              render={() => <Cart cart={this.state.cart}/>}
            />
            <Footer />
          </>
        </BrowserRouter>
      </div>

    );
  }
}

export default App






// https://github.com/johanstr/react-gameshop-a42b.git