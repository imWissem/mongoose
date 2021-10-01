const express=require('express');
const router=express.Router();
const human=require('../model/human')



/******************************************************************************************************************/
const add_save_human = new human ({name:'mr_bean', age:37, favoriteFood:["fajitas","pasta"],})
    add_save_human.save()
    .then(human => {console.log(human)})
    .catch(error => {console.error(error)})
/******************************************************************************************************************/
let humans=[
    {name:"lucifer", age:1000, favoriteFood:["pasta", "whiskey"] },
    {name:"rihab", age:30, favoriteFood:["kaki", "cofee" ]},
    {name:"Fares", age:25, favoriteFood:["pizza", "pasta"]}]
    human.create(humans,(error,data)=>{
      {if (error){ return console.log(error);
      }else {return console.log(null, data) }
     };
    })
/******************************************************************************************************************/
human.find({name:"rihab"},(error,data)=>{
    {
      if (error){ return console.log(error);
      }else {return console.log(null, data)}
    };
  })
/******************************************************************************************************************/
human.findOne({favoriteFood:{$all:['pizza']}},(error,data)=>{
    if (error){return console.log(error)}
    else{ return console.log(null,data) } 
})
/*******************************************************************************************************************/
human.findById({_id:'615751b7ade9ffc2dadb4907'},(error,data)=>{
    if (error){return console.log(error)}
    else{ return console.log(null, data)}
})
/*******************************************************************************************************************/
human.findOne({name:"mr_bean"},(error,data)=>{
    if (error){ return console.log(error)}
    else{ data.favoriteFood.push("steak")
          data.save() }
})
/*******************************************************************************************************************/
human.findByIdAndRemove({_id:"615751b7ade9ffc2dadb4907"},(error,data)=>{
  if (error) { return console.log(error)}
  else{ return console.log(null, data) }
})
/*******************************************************************************************************************/
human.remove({name:'lucifer'},(error,data)=>{
    if (error){console.log(error)}
    else{ return console.log(null, data)}
})
/*******************************************************************************************************************/
human.find({favoriteFood: ["pasta"]})
.sort({name:'asc'})
.limit(2)
.select('-age')
.exec((error,data)=>{
    if (error){console.log(error)}
    else{ return console.log(null, data)}
})
/********************************************************************************************************************/



module.exports=router