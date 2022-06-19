import { sha256 } from "crypto.js";

class Block{

    //first we create counstrctor for a block, it takes:
    //hash = fuction calculateHash() or fuction maining()
    //nonce -> its for make a chance from 0 to number (for lop)
    //data of block
    //previoshash
    //height -> for any block there is height
    //timeStamps = Date.now() in sec:
    
    constructor(hash,data,previoshash,height,nonce,timeStamps,time){
        this.hash = this.proofOfWork();
        this.nonce =parseInt(this.proofOfWork().substring(77));
        this.data = "temp";
        this.previoshash = previoshash;
        this.height = height;
        this.timeStamps =parseInt(this.proofOfWork().substring(64,77));
        // this.time = (new Date().getTime().toString()).slice(0,-3);
    }

    //Function calculateHash -> to make Hashes for our blocks
    calculateHash(){
        return sha256(this.height+this.previoshash+this.data+this.timeStamps).toString();
    }

  

    proofOfWork(){
        let data = "temp";
        let nonce = 0;
        let numOfGuesses = 0;
        let difficulty = 1;
        let timeStamp = Date.now()
        
        for (let i = 0; i < 10000000; i++){   
        let magicHash = sha256(
            data + nonce + timeStamp
        ).toString();
            if (magicHash.substring(0, difficulty) == "".padStart(difficulty, "0")){
                console.log("magic hash : " + magicHash)
                console.log("we found the hash with "+numOfGuesses+" guesses")
                return magicHash + timeStamp + nonce;
            }
        numOfGuesses++; 
        nonce++;
        }
 


}
}
//اوبجكت
var x=new Block();
// console.log(x.time);
// console.log(Date.now().toString())


//لازم اسوي اكسبورت بدونه ماقدر اتعامل مع الكلاسات
export default Block;