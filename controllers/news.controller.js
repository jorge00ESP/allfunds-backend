const NewsModel = require("../models/news.model");

async function getModelById(id){

   return await NewsModel.findById(id);

}

exports.getAll = async (req, res) => {

   try{
      const allNews = await NewsModel.find();

      res.json({status: true, data: allNews, message: "All news"})

   }catch(err){
      res.status(500).json({status: true, data: null, message: err})
   }

}

exports.getById = async (req, res) => {

   try{
      const resNew = await getModelById(req.params.id);

      res.json({status: true, data: resNew, message: "New by id -> " + req.params.id})

   }catch(err){
      res.status(500).json({status: true, data: null, message: err})
   }
}

exports.create = async (req, res) => {

   const body = new NewsModel({
      title: req.body.title,
      body: req.body.body
   })

   try{
      const newNew = await body.save();
      
      res.status(201).json({status: true, data: newNew, message: "New created"})

   }catch(err){
      res.status(400).json({status: false, data: null, message: err})

   }

}

exports.deletetById = async (req, res) => {

   try{
      const resNew = await getModelById(req.params.id);

      console.log(resNew);

      if(resNew == null){

         res.status(400).json({status: false, data: null, message: "The new was not found"});

      }else{

         //await resNew.remove(); //it doesn't work

         await NewsModel.deleteOne({_id: resNew._id}); //https://mongoosejs.com/docs/api/model.html#Model.deleteOne()

         res.json({status: true, data: null, message: "New by id " + req.params.id + " has been deleted"})
      }


   }catch(err){
      res.status(500).json({status: false, data: null, message: err.message})
   }
}