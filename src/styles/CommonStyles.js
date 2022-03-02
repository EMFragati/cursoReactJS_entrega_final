export const LoadingMessage = () => {   
    return(
        <>
            <div className="mx-5 my-5">
                <span className="h2">Cargando...</span>
                <div className="spinner-border text-primary" role="status"></div>
            </div>
        </>
    )
};

export const Row = ( { children } ) => {
    return (
        <>
            <div className="row">
                { children }
            </div>
        </>
    )
};

export const Disclaimer = () => {   
    return(
        <>
            <div className="bg-dark text-center text-lg-start footer">            
                <div className="text-center p-3 text-primary">
                    IMPORTANTE:
                    El presente sitio web forma parte de un trabajo estudiantil con fines estrictamente educativos.
                    La tienda electrónica con nombre "Manga Storm" aquí expuesta es ficticia. De existir una, no se encuentra representada por este sitio.
                    Este sitio NO persigue NINGUN beneficio económico.
                    Todos los precios aquí expuestos son ficticios.
                    Todas las imagenes utilizadas pertenecen a sus respectivos propietarios.                   
                    Este proyecto se dara de baja permanentemente al finalizar la cursada.
                </div>            
            </div>
        </>
    )
};