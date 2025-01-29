import Cats from '../Models/Cats.js'

export const updateVisits = async(req, res)=>{
    try{
        const id = parseInt(req.params.id)

        if(!id){
            return res.status(404).json({message: 'ID Can not be found'})
        }
        const selectedCat = await Cats.findByPk(id);
    
        selectedCat.visits+=1;
    
        await selectedCat.save();
        return res.status(200).json({ message: 'Visit count updated successfully', updatedCat: selectedCat });
    }
    catch(error){
        return res.status(500).json({messages: 'An error occured while updating visits'})
    }
}