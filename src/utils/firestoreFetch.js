import { collection , doc , getDoc , getDocs , increment , setDoc , updateDoc } from "firebase/firestore";
import { dataBase } from "./firebaseConfig";

/*Funcionalidad suplementaria que sirve para simplificar las principales y evitar repetir codigo.
Obtiene el documento de un item de un producto y obtiene la informacion de utilidad
*/

    const parseItemDataFromDocument = ( item ) => {
        let data = item.data();
        return ({
            id: item.id,
            title: data.title,
            cover: data.cover,
            price: data.price,
            description: data.description,
            category: data.category,
            editorial: data.editorial,
            stock: data.stock
        })         
    };

/*Obtencion de un unico producto desde la base de datos*/
export const getSingleProduct = async ( itemId ) => {
    const docRef = doc( dataBase, "products", itemId );
    const item = await getDoc( docRef );  
    
    if ( item.exists()) {
        return ( parseItemDataFromDocument( item ))
    };     
    
    console.log("No such document!");    
};

/*Obtencion de multiples documentos desde la base de datos*/
export const getAllProducts = async () => {   
    const querySnapshot = await getDocs( collection( dataBase , "products" ) );
    const dataFromFirebase = querySnapshot.docs.map( item => ( parseItemDataFromDocument( item )));    
    return dataFromFirebase;
};
    
/*Obtencion de todas las categorias de productos desde la base de datos*/
    export const getAllCategories = async () => {        
        const querySnapshot = await getDocs( collection( dataBase , "categories" ) );
        const dataFromFirebase = querySnapshot.docs.map( 
            category => ({ 
                id: category.id,
                name: category.data().name
            })
        ); 
        return dataFromFirebase;
    };

/*Reduce la cantidad de unidades de un producto en la base de datos*/
    export const decrementProductStock = async ( itemId , number ) => {
        const itemReference = doc(dataBase, "products", itemId );        
        await updateDoc( itemReference, { stock: increment(-number) });    
        return itemReference
    };

/*Expotar una orden de compra hacia la base de datos*/
    export const uploadOrder = async ( order ) => {         
        const newOrderdRef = doc(collection( dataBase, "orders"));        
        await setDoc( newOrderdRef , order );     
        return newOrderdRef
    };  