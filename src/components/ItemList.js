/*Importacion de componentes*/    
    import Item from './Item';
    import ItemsListWrapper from '../styles/ItemListStyles';
    import { LoadingMessage } from '../styles/CommonStyles';

const ItemList = ( { items } ) => {   

    /*Renderizado Condicional*/ 
    /*Si tengo items que mostrar los agrego a la lista, si no, muestro un mensaje con un spinner*/    

    const sortedItems = items.sort(( itemA, itemB ) => itemA.title.localeCompare(itemB.title))

    if ( sortedItems.length !== 0 ) {
        return (
            <>
                <ItemsListWrapper>
                    { 
                        sortedItems.map( 
                            item => ( <Item id={item.id} cover={item.cover} key={item.id}/> )
                        )
                    }
                </ItemsListWrapper>
            </>
        )
    } else {
        return ( 
            <> <LoadingMessage/></>
        )
     }    
};

export default ItemList;