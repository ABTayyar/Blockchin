import { BlockList } from "net";
import Block from "./Block.js";


class Blockchin{

    
    
    chain;
    constructor(){
        this.chain=[];
        this.init();
    }

    init(){

        let block = new Block(0,"Genesis","null",0,0,Date.now(),0);
        if(this.chain.length<=0){
            return;
        }
        this.chain.push(block);
        console.log(this.chain);
        
        for(let i =1; i< 10 ; i ++){
            let block = new Block("",data,this.chain[i-1].hash,this.chain.length,0,Date.now());

            this.chain.push(block);

            console.log(this.chain[i]);
            
                } 
    }

    // addBlock(data){
    //    let block = new Block(0,data,this.chain[this.chain.length-1],this.chain.length,0,0,Date.now());
    //    if(this.chain.length<=0){
    //     return;
    // }
    // this.chain.push(block);
    // console.log(this.chain);
    // }

   
    validateBlocks(){
        let bool = true;
        for(let i = 1; i<this.chain.length; i++){
            if(this.chain[i].prev != this.chain[i-1].hash)
            bool = false;
        }
        console.log(bool);
        
        for(let i = 0; i<this.chain.length; i++){
          if (!(sha256(this.chain[i].data + this.chain[i].nonce + this.chain[i].timeStamp).toString() == this.chain[i].hash)){
            bool = false;
          }

         }
            console.log(flag);
        }

 


}
var x=new Blockchin();
console.log("------------------------------------------------------------------------------------")







    
export default Blockchin