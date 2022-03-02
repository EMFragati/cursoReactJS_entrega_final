import { useContext } from "react";
import { CartContext } from "../components/CartContext";  
import { Link } from 'react-router-dom';

export const CartItemsContainer = ( { children } ) => {
    return (
        <>
            <div className="container-fluid">
                {children}                    
            </div>
        </>
    );
};

export const CartPurchaseSummaryContanier = ( { children } ) => {
    return (
        <>
            <div className="col-xl">
                <div className="row">
                    <span className="h5">Tu resumen de compra</span>
                    {children}
                </div>
            </div>            
        </>
    );
};

export const CartEmptyMessage = ( { message } ) => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl my-3">
                    <span className="h3 mx-3">{`${message}`}</span>
                    <br/>            
                    <Link to={`/`}><button type="button" className="btn btn-success my-3">Seguir Comprando</button></Link>
                    </div>
                </div>
            </div>
        </>
    )
};

export const CartHeader = () => {
    const context = useContext( CartContext );  

    /*Renderizado*/
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl">
                        <span className="h1 my-3 mx-3">Tus productos hasta el momento</span>
                        <br/>
                        <button type="button" className="btn btn-danger mx-5 my-5" onClick= { event => { context.clear() } }>Limpiar Carrito</button>              
                        <Link to={`/`}><button type="button" className="btn btn-success">Seguir Comprando</button></Link>
                    </div>
                </div>
            </div>
        </>
    )
};

export const CartItemDetail = ( { id , title , cover , quantity , price } ) => {
    const context = useContext( CartContext );
    return (
        <>
            <div className="row border-top border-bottom" key={`item_id_${id}_list`}>
                <div className="row my-2">
                <div className="col-xl"><img className="itemCover" src={`${cover}`} alt="item.png"/></div>                            
                <div className="col-xl"><span className="h4"> {`${title}`}</span></div>                            
                <div className="col-xl"><span>Cantidad: {`${quantity}`}</span></div>                       
                <div className="col-xl"><span>Precio: ${`${price}`}</span></div>                                                                   
                <div className="col-xl"><button type="button" className="btn btn-danger mx-1" onClick= { event => { context.removeItem( id ) } }>Remover</button></div>                                                    
                </div>
            </div>
        </>
   )
};

export const CartItemDetailWrapper = ( { children } ) => {
    return (
        <>
            <div className="col-sm-5 border-end mx-5">
                { children }
            </div>   
        </>
    );
};

export const CartPurchaseSummary = ( { createOrder } ) => {
    const context = useContext( CartContext );  

    return (
        <>
            <div className="row" key={`item_id_prices_total`}>                            
                <div className="col-sm-8 my-2">
                    <div className="row border-top">
                    <div className="col-sm my-2"><span>Total:</span></div>
                    <div className="col-sm my-2"><strong>{context.totalItemsPrice()}</strong></div>
                    </div>
                    <div className="row">
                    <div className="col-sms">
                        <button type="button" className="btn btn-success mx-5 my-5" onClick= { event => { createOrder( event ) } }>Confirmar Compra</button>
                    </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export const OrderItemDetail = ( { id , title , price , quantity } ) => {
    return (
        <>
            <div className="row" key={`item_id_${id}_prices`}>
                <div className="col-sm-8">
                <div className="row">
                    <div className="col-sm"><span> {`${title}`}</span></div>
                    <div className="col-sm"><span>{`${quantity} unidades * $${price} = $` }{ quantity * price } </span></div>
                </div>
                </div>
            </div>
        </>
   )
};

export default OrderItemDetail;