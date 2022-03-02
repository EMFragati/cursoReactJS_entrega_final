export const IncrementCounterButton = ( { onClickAction } ) => {
    return (
        <>
            <button type="button" className="btn btn-primary mx-1" onClick={ onClickAction }><strong>+</strong></button>
        </>
    )
};

export const DecreaseCounterButton = ( { onClickAction } ) => {
    return (
        <>
             <button type="button" className="btn btn-primary mx-1" onClick={ onClickAction }><strong>-</strong></button>
        </>
    )
};


export const ItemCountContentContainer = ( { children } ) => {
    return (
        <>
            <div className="contanier">
                <div className="row justify-content-md-right">
                    { children }                
                </div>                
            </div>
        </>
    )
};

export const AddToCartButton = ( { onClickAction } ) => {
    return (
        <>
            <button type="button" className="btn btn-primary mx-1" onClick={ onClickAction }>Agregar al Carrito</button>
        </>
    )
};

export const StockCounter = ( { value } ) => {
    return (
        <>
            <div className="col-8 my-2">Unidades en stock: {value}</div>
        </>
    )
};

export const ControllersContainer = ( { children } ) => {
    return (
        <>
            <div className="col-12">
                <br/>          
                    { children }                
            </div>
        </>
    )
};

export const CounterDisplay = ( { value } ) => {
    return (
        <>
            <span>{ value }</span>
        </>
    )
};
