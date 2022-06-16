import { sha256 } from "crypto.js";
class Block{

    constructor(hash,data,previoshash,height,nonce,timeStamps){
        this.hash = this.calculateHash();
        this.nonce = 0;
        this.data = data;
        this.previoshash = previoshash;
        this.height = height;
        this.timeStamps = timeStamps;
        
    }

    
    calculateHash(){
        return sha256(this.height+this.previoshash+this.data+this.timeStamps).toString();
    }

}

export default Block;