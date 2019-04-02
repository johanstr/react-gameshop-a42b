import React, { Component } from 'react'

class Cart extends Component
{
    /* createCartItems
     * ---------------
     * Hiermee creeeren we voor iedere game in de shoppingcart een rij
     * in de tabel (zie render -> tbody)
     *
     */
    createCartItems = () => {
        const cart = this.props.cart

        return cart.map(
            (game) => {
                return (
                    <tr key={game.id}>
                        <td>
                            <img
                                className="shopping-cart-image"
                                src={game.image}
                                alt={game.title}
                                title={game.title}
                            />
                        </td>
                        <td>{game.title}</td>
                        <td className="text-center">
                            <i className="fas fa-minus-square"></i>
                            {game.amount}
                            <i className="fas fa-plus-square"></i>
                        </td>
                        <td className="text-right">&euro; {game.price}</td>
                        <td className="text-right">&euro; </td>
                    </tr>
                )
            }
        )
    }
    /*
     * Render the component
     * @TODO: Table body needs to be filled with the games in the shopping cart
     */
    render() {
        return (
            <main>
                <div className="album py-5 bg-light">
                    <div className="container">
                        <div className="row">
                            <h1>Winkelwagen</h1>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th colspan="2">Game</th>
                                        <th className="text-center">Aantal</th>
                                        <th className="text-right">Prijs p.st.</th>
                                        <th className="text-right">Totaal</th>
                                        <th className="text-center">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.createCartItems()}                                    
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td colspan="4" className="text-right">
                                            <strong>Totaal</strong>
                                        </td>
                                        <td className="text-right">
                                            <strong>&euro; </strong>
                                        </td>
                                        <td></td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

export default Cart