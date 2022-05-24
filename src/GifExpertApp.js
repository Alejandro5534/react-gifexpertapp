import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";
import Navbar from "./ui/Navbar";

const GifExpertApp = () => {
    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    
    const [categories, setCategories] = useState(['Ciencias']);
    // const handleApp = () => {
    //     setCategories([...categories, 'HunterXHunter'])
    // }
    return (
        
        <div style={{left: '0',
        top:'0',
        right: '0'}}>  
            <Navbar />
            <h2 style={{textAlign:'center'}}>Organigrama de eventos</h2>
            {/* <AddCategory setCategories={setCategories} /> */}
            {/* <hr/> */}
            
            <ol>
                {
                    categories.map((category, i) => 
                        <GifGrid
                        key = {category}
                        category={category}

                        />
                    )
                }
            </ol>
        </div>

    )
}
export default GifExpertApp;