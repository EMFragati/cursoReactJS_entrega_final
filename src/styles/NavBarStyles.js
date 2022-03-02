import { getAllCategories } from '../utils/firestoreFetch';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';   

export const Brand = () => {
    return ( <Link to="/" className="navbar-brand"><strong className='h3'>Manga Storm</strong></Link> )
};

export const NavBarContentContainer = ( { children } ) => {
    return (
        <>
            <nav className="navbar navbar-expand-xl navbar-light bg-primary">    
            <div className="container-fluid">
                { children }
            </div>
            </nav>   
        </>
    )
};

export const NavBarLinksSections = ( { children } ) => {
    return (
        <div className="collapse navbar-collapse show">
            <div className="navbar-nav">
                { children }
            </div>
        </div>
    )
};

export const NavBarCategoryLink = ( { categoryId} ) => {  
    return(
        <>
            <Link to={`/category/${categoryId.toLowerCase()}`} className="nav-link active">{categoryId}</Link>                                
        </>
    )
};

export const NavbarCategoryLinksContainer = () => {   
        
    const [ categories , setCategories ] = useState([]);

    useEffect(() => {

        /*Consulto a la base de datos y obtengo todas las categorias existens para visualizarlas. De forma dinamica, si en la base de datos se agrega una nueva, aparecera en la app*/
            getAllCategories()
                .then( response =>setCategories(response))
                .catch( error => console.log(error));
  
    }, [ categories ]);

    return (
        <>
            {
                categories.map( category => (
                    <NavBarCategoryLink categoryId={category.name} key={category.id} />
                ))
            }            
        </>
    )
};