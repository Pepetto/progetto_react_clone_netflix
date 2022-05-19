import React,{useState} from "react";
import MyNavbar from "./MyNavbar/MyNavbar.component";
import Searching from "./Search/Searching";
export default function ListaMovie () {

    return(
        <>
            <MyNavbar/>
            <div class="page">
                <Searching />
                    <div class="contenitore">
                        
                        
                            
                                {/* <MovieCard title="Erik" rating="9.8" descrizione="Banane gialle "/> */}
                    
                    </div>
            </div>
        </>
    )
}