import Block from "./Block.mjs";


class Blockchin{

    
    chain;
    constructor(){
        this.chain=[];
        this.init();
    }

    init(){
        let block = new Block(0,"Genesis","null",0,0,Date.now());
        if(this.chain.length!=0){
            return;
        }
        this.chain.push(block);
        console.log(this.chain);
        
    }

  
}
    
new Blockchin();

    
export default Blockchin