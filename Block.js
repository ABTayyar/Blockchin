import { sha256 } from "crypto.js";

class Block{

    constructor(hash,data,previoshash,height,nonce,timeStamps){
        this.hash = this.mainig();
        this.nonce = 0;
        this.data = data;
        this.previoshash = previoshash;
        this.height = height;
        this.timeStamps = timeStamps;
        
    }

    
    calculateHash(){
        return sha256(this.height+this.previoshash+this.data+this.timeStamps).toString();
    }

    mainig(){
       let block = "Abdulrahman al tayyar"
     
       let nonce = 0;
       let numberOfGuesses = 0;

       for (let i = 0; i < 10_000_000; i++) {
        let magicHash = sha256(block + nonce + Date.now()).toString();
        console.log(magicHash)
        //5 it's mean to diffclute 
        if (magicHash.substring(0, 5) =="0000") { 

            console.log("magic hash : " + magicHash) 
            console.log("we found the hash with "+numberOfGuesses+" guesses") 
            return
            
        }
        numberOfGuesses++;
        nonce++;

       }

    }


}

new Block();



export default Block;