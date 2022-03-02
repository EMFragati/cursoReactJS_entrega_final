import { getAllProducts } from '../utils/firestoreFetch';
import { useEffect , useState } from "react";  
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';  

const ItemListContainer = () => {    
    const [ productsToShow , setProductsToShow ] = useState([]);
    const categoryId = useParams().categoryId;
    
    useEffect(() => {       
      /*Si cambia la categoria, blanqueo la lista actual para que aparesca el mensaje de carga*/
      if ( productsToShow.length !== 0 ) { setProductsToShow([]) };

      /*Aplico un filtro segun si tengo identificada una categoria o no*/
        const filterProducts = ( products ) => {                 
            if ( categoryId ) { return products.filter( product => product.category.toLowerCase() === categoryId ) }
            return products;              
          };    

      getAllProducts()            
        .then( response => setProductsToShow( filterProducts( response )))
        .catch( error => console.log( error ));

      }, [ categoryId ]);      
    
    return(           
      <><ItemList items={ productsToShow }/></>
    )
  };
  
  export default ItemListContainer;