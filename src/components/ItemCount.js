import { useState } from "react";
import { DecreaseCounterButton, IncrementCounterButton , ItemCountContentContainer , AddToCartButton , StockCounter , 
         ControllersContainer , CounterDisplay } from '../styles/ItemCountStyles';

const ItemCount = ( { stockLimit , onAdd } ) => {
   
    /*Nota: Esto se conoce como "Desestructuracion de arrays". El hook useState() devuelve un array de dos elementos,
     de esta fomra estoy declarando 2 variables en orden con los valores de ese array*/
    const [ counter , setCounter ] =  useState(0);
    const [ stock , setStock ] =  useState(stockLimit - counter);
    
    const incrementCounter = ( event ) => {      
        event.stopPropagation();
        if ( counter < stockLimit ) {
            setStock ( stock - 1 );
            setCounter ( counter + 1 );            
        } else {
            setCounter ( stockLimit );
        };       
    };

    const decreaseCounter = ( event ) => { 
        event.stopPropagation();
        if ( counter > 0 ) {
            setStock ( stock + 1 );
            setCounter ( counter - 1 );            
        } else {
            setCounter (0);
        };        
    };    
    
    /*Renderizado*/
    return (
        <>           
            <ItemCountContentContainer>
                <ControllersContainer>         
                    <DecreaseCounterButton onClickAction={ event => { decreaseCounter( event ) } }/>                        
                    <CounterDisplay value={ counter }/>
                    <IncrementCounterButton onClickAction={ event => { incrementCounter( event ) } }/>
                    <AddToCartButton onClickAction={ event => { onAdd( event , counter ) } }/>                    
                </ControllersContainer>
                <StockCounter value={ stock }/>             
            </ItemCountContentContainer>
        </>
    )
};

export default ItemCount;