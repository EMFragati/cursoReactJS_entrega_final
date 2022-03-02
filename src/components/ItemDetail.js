import { useState, useContext } from "react";
import { CartContext } from "./CartContext";
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import { ItemDetailCover , ItemDetailTitle , ItemDetailDescription , ItemDetaiPrice , ItemDetailContentContainer , ItemDetailDataContainer , ItemDetailCoverContainer ,
         ItemDetailOutOfStockMessage , ItemDetailItemCountContainer ,InspectMyPurchaseButton } from '../styles/ItemDetailStyles';

const ItemDetail = ( { item } ) => {   
    const [ numberOfItemsAdded , setNumberOfItemsAdded ] = useState(0);
    const [ stockLimit , setStockLimit ] = useState( item.stock );

    const context = useContext( CartContext ); 

    const onAdd = ( event , number ) => {
        event.stopPropagation();        
        if ( number > 0 ){                        
            setNumberOfItemsAdded( number );            
            context.addItem( item, number );
        };
    };
   
    /*Renderizado condicional:
        Caso 1: si la componente apensas se ha renerizado, se mostrara el ItemCount dentro de un ItemDetailItemCountContainer
        Caso 2: si me quede sin stock, el ItemCount es reemplazado por el mensaje de "Agotado" -> ItemDetailOutOfStockMessage
        Caso 3: si se han agregado items al carro, el ItemCount es reemplazado por el boton "Inspeccionar compra" -> InspectMyPurchaseButton        
    */
    let conditionalContent;
    if ( stockLimit === 0 ) { conditionalContent = <ItemDetailOutOfStockMessage/> }
        else if ( numberOfItemsAdded > 0 ) { conditionalContent = <Link to={`/cart`}><InspectMyPurchaseButton/></Link> }
        else { conditionalContent = <ItemDetailItemCountContainer><ItemCount stockLimit={stockLimit} onAdd={onAdd}/></ItemDetailItemCountContainer> };    

    return (
        <>
            <ItemDetailContentContainer>
               <ItemDetailCoverContainer>
                    <ItemDetailCover url={item.cover}/>                        
                </ItemDetailCoverContainer>
                <ItemDetailDataContainer>                       
                    <ItemDetailTitle value={ item.title }/>
                    <ItemDetailDescription value={ item.description }/>
                    <ItemDetaiPrice value={ item.price }/>                        
                    { conditionalContent }
                </ItemDetailDataContainer>
            </ItemDetailContentContainer>
        </>
    )
  };
  
  export default ItemDetail;