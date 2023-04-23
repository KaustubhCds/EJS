const express = require('express');

const bodyParser = require('body-Parser');
const date=require(__dirname + "/date.js");
console.log(date.getDay());
const app = express();
let items=["Buy food","Cook food","Eat food"];
let workitems=[];
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.get("/",function(req,res){



  // lettodayy=today.getDay();
  let day=date.getDate();
  res.render("list",{listtitle: day, newListItems: items});
});
  app.post("/",function(req,res){
    let item=req.body.newItem;
    if(req.body.list==="Work"){
      workitems.push(item);
    }
    else{
      items.push(item);
      res.redirect("/");

    }



    //Here we cant use res.render again thats why we are calling
    //"/" again
    res.redirect("/");
  })
  app.get("/work",function(req,res){
    res.render("List",{listtitle:"Work List",newListItems:workitems});
  });
  app.post("/work",function(req,res){
    let item=req.body.newItem;
    workitems.push(item);
    res.redirect("/work");
  });
  app.get("/about",function(req,res){
    res.render("about");
  })
  // if(todayy===0 || todayy===6){
  //   day=todayy;
  // }else{
  //
  //   day=todayy;
  // }
  // switch (todayy) {
  //   case 0:
  //     day="Sunday";
  //     break;
  //   case 1:
  //     day="Monday";
  //     break;
  //   case 2:
  //     day="Tuesday";
  //     break;
  //   case 3:
  //     day="Wednesday";
  //     break;
  //   case 4:
  //     day="Thursday";
  //     break;
  //   case 5:
  //     day="Friday";
  //     break;
  //   case 6:
  //     day="Saturday";
  //     break;
  //   default:
  //     console.log("Error:Current day is equal to:"+todayy);}


app.listen(3000,function(){
  console.log("Server started on port 3000");
})
