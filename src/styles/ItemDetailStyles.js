export const ItemDetailCover = ( { url }) => {   
    return (
        <>
            <img src={ url } alt='img'/>
        </>
    )
};

export const ItemDetailTitle = ( { value }) => {   
    return (
        <>
            <div className="row"><p className="h1">{ value }</p></div>
        </>
    )
};

export const ItemDetailDescription = ( { value }) => {   
    return (
        <>
            <div className="row">{ value }</div>
        </>
    )
};

export const ItemDetaiPrice = ( { value }) => {   
    return (
        <>
            <div className="row mt-4"><strong>Precio: { value }</strong></div>  
        </>
    )
};

export const ItemDetailContentContainer = ( { children } ) => {
    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    { children }
                </div>
            </div>
        </>
    )
};

export const ItemDetailCoverContainer = ( { children } ) => {
    return (
        <>
            <div className="col-4">               
               { children }              
            </div>
        </>
    )
};  

export const ItemDetailDataContainer = ( { children } ) => {
    return (
        <>
            <div className="col-8">               
               { children }              
            </div>
        </>
    )
};  

export const ItemDetailItemCountContainer = ( { children } ) => {
    return (
        <>
            <div className="row">               
               { children }              
            </div>
        </>
    )
};  

export const ItemDetailOutOfStockMessage = () => {
    return (
        <>
            <div className="row">
                <strong>¡AGOTADO!</strong>
            </div>
        </>
    )
};  

export const InspectMyPurchaseButton = () => {
    return (
        <>
            <button type="button" className="btn btn-success">Inspeccionar mi compra</button>
        </>
    )
}; 