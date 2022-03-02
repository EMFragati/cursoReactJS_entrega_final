
  import { decrementProductStock , uploadOrder } from '../utils/firestoreFetch';
  import { serverTimestamp } from 'firebase/firestore';
  import { useState, useContext } from "react";
  import { CartContext } from "./CartContext"; 
  import { CartItemsContainer , CartEmptyMessage , CartHeader , CartItemDetail , CartItemDetailWrapper , CartPurchaseSummary , 
           CartPurchaseSummaryContanier , OrderItemDetail } from '../styles/CartStyles';           

  import {Row , LoadingMessage } from '../styles/CommonStyles';

const Cart = () => {
    const context = useContext( CartContext );  
    const totalItemsPrice = context.totalItemsPrice();
    const [ orderTicket , setOrderTicket ] = useState()

    const createOrder = ( event ) => {
      event.stopPropagation();
      let order = {
        buyer: {
          name: 'A Buyer',
          phone: '12345678',
          email: 'cursoReact_@test.com'
        },
        items: context.itemsInCart.map( item => ({
          id: item.id,
          price: item.price,
          title: item.title,
          quantity: item.quantity
        })),
        date: serverTimestamp(),
        total: totalItemsPrice
      };     
     
      setOrderTicket("inProgress");

      uploadOrder( order )
        .then( result => setOrderTicket ( `${result.id}` ))
        .catch( error => console.log ( error ));
        
        context.itemsInCart.forEach( item => {
          decrementProductStock( item.id , item.quantity );
        });        

        context.clear();
    }; 

    /*Renderizado Condicional: En caso de no tener items en el carro, se mostrara un mensaje dependiendo de si se trata de una una compra anulada o completada*/
    if ( context.itemsInCart.length === 0 ) {
      if ( orderTicket === undefined ) {
      
        return ( <><CartEmptyMessage message="No tienes productos por el momento"/></> )
      } else {
        if ( orderTicket === "inProgress" ) {
          return ( <><LoadingMessage/></> )
        } else {         
          return ( <><CartEmptyMessage message={`Se ha generado su orden de compra con el ticket: ${orderTicket}`}/></> )
        }
      };
    };  

    /*Renderizado*/
    return (
        <>  
          <CartItemsContainer>
            <CartHeader/>
            <Row>
            <CartItemDetailWrapper>              
              {
                context.itemsInCart.map(
                  item => ( <CartItemDetail id={item.id} title={item.title} cover={item.cover} quantity={item.quantity} price={item.price} key={`item_detail_${item.id}`} /> )
                )
              }
            </CartItemDetailWrapper>
            <CartPurchaseSummaryContanier>                
                {
                  context.itemsInCart.map(
                   item => ( <OrderItemDetail id={item.id} title={item.title} quantity={item.quantity} price={item.price} key={`item_order_detail_${item.id}`}/> )                      
                        )
                 }
              <CartPurchaseSummary createOrder={createOrder}/>            
            </CartPurchaseSummaryContanier>         
          </Row>           
        </CartItemsContainer>
      </>      
    )
};

export default Cart;