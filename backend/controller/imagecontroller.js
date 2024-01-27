import File from "../models/fileschema.js";

export const uploadFile =async (req,res) => {
    const fileobj={
        filename:req.file.originalname,
        filepath:req.file.path
    }
  try{
       const file = await File.create(fileobj)
       console.log(file)
       res.status(200).json({path:`http://localhost:5000/file/${file._id}`})
  }catch(err){
    console.log(err);
    res.status(500).send('Server Error');
  }
}

export const downloadImage = async (req,res) => {
    try{
          const file = await File.findById(req.params.id);
              file.downloadcount++;
              await file.save();
              res.download(file.filepath,file.filename);
    }catch(error){
        console.log(error.message);
        return res.status(500).send('Server Error');
    }
}
