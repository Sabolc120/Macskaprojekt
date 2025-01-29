import Cats from '../Models/Cats.js'

export const addCat = async(req, res)=>{
    try{
        const {catname, catpicture, description, visits} = req.body;
        if(!catname || !catpicture || !description){
            return res.status(400).json({message: 'Missing required fields'})
        }
        const newCat = await Cats.create({
            catname,
            catpicture,
            description,
            visits: visits || 0,
          });
        return res.status(200).json({ message: 'Cat was added successfully', addedCat: newCat });
    } catch(error){
        return res.status(500).json({message: 'An error occured while adding cat'})
    }
}
export const adoptCat = async(req, res)=>{
    try{
        const id = parseInt(req.params.id)
        if(!id){
            return res.status(404).json({message: 'ID is not found'})
        }
        await Cats.destroy({where:{id:id}})
        console.log(req.body)
        return res.status(200).json({message: 'Cat was adoopted successfully'})
    }
    catch(error){
        return res.status(500).json({message: 'Could not delete cat'})
    }
}