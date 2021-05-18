'use strict';


const uuid = require('uuid').v4;

class Clothes {
  constructor() {
    this.db = [];
  }
  create(obj) {
    const clothes = {
        id: uuid(),
        data: obj,
    };
    this.db.push(clothes);
    return clothes;
}

  read(id) {
    if(id){
      return this.db.find((cloth)=>cloth.id===id);
    }
    else{return this.db;}

  }
  update(id, obj) {
    for (let i = 0; i < this.db.length; i++) {
        let cloth = this.db[i];
        if(cloth.id === id) {
            this.db[i].data = obj;
            return this.db[i];
        } 
    }
}

  delete(id) {
this.db=this.db.filter((cloth)=>cloth.id!==id);
return this.db;
  }

}

module.exports=Clothes;