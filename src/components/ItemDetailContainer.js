import { getSingleProduct } from '../utils/firestoreFetch';
import { useEffect , useState } from "react";
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import ItemDetailWrapper from "../styles/ItemDetailContainerStyles";  
import { LoadingMessage } from '../styles/CommonStyles';
  
const ItemDetailContainer = () => {
  
    const [ item , setItem ] = useState();   
    const itemId = useParams().id;
    
    useEffect(() => {
      
      getSingleProduct( itemId )
        .then( response =>setItem(response))
        .catch( error => console.log(error));

  }, [ itemId ]); 
    
    if ( item !== undefined ) { 
      return (
        <>
          <ItemDetailWrapper>
            <ItemDetail item={item}/>
          </ItemDetailWrapper>
        </>
      )
    } else {
      return ( <><LoadingMessage/></> )
    };

};

export default ItemDetailContainer;