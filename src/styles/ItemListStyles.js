const ItemsListWrapper = ( { children } ) => {
    return (
        <>
            <div className="container">
                <div className="row">        
                    <div className="col-12 d-flex flex-wrap">
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ItemsListWrapper;