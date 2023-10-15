import React, { useEffect,useState } from 'react';
import '../App.css';
import LinkBox from './LinkBox';
import axios from 'axios'
var rec_prods = []
const LinkBoxContainer = () => {

    const [posts, setPosts] = useState([]);
    useEffect(() => {
        axios.post('http://127.0.0.1:5000', {
        source: "react",
        message: "can you tell me about different TVs?"
    }).then(response => {
        rec_prods = JSON.parse(response.data.message.content).recommended_products
        console.log(JSON.parse(response.data.message.content).recommended_products[0].description)
        setPosts(JSON.parse(response.data.message.content));
            
        });
    },[]);

    return(
        <>
        {rec_prods.length > 0 && rec_prods.map(prod => (
            <LinkBox text={prod.name} price={prod.price} desc={prod.desc}/>
      ))}
        </>
    );
    /*
    const [links,setLinks] = useState([]);
    useEffect(() => {
        console.log("hiya budddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd")
        axios.post('http://127.0.0.1:5000', {
        source: "react",
        message: "can you tell me about verizon phone plans"
    }).then(function (response) {
        setLinks(JSON.parse(response.data.message.content))
        
        var gpt_out = JSON.parse(response.data.message.content)
        
        console.log(gpt_out)
        if(gpt_out.recommended_products.length > 2){
        var fillMe = "https://www.verizon.com/onesearch/search?q="+gpt_out.recommended_products[0].name.split(' ').join('+')+"&ES=shop&src=wireless"
        setLinks(fillMe)
        
        }
        
    })
},[]);

 return(
    
    <div>
        {console.log("should be last")}
           {links.map(link => <div> {link} </div>)} 
       </div>
);
*/
};

export default LinkBoxContainer