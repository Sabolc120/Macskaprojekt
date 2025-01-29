import Cats from '../Models/Cats.js'


export const getCats = async(req, res)=>{
    try{
        const cats = await Cats.findAll();

        if(!cats){
            return res.status(404).json({error: 'Cat cant get'})
        }
        res.status(200).json(cats);
    }
    catch (error){
        return res.status(500).json({error: 'An error occured while fetching the cat'})
    }

}
export const getCat = async(req, res) => {
    try {
        const id = parseInt(req.params.id);
        const cat = await Cats.findByPk(id);

        if (!cat) {
            return res.status(404).json({ error: 'Cat not found' });
        }

        return res.status(200).json(cat);
    } catch (error) {
        return res.status(500).json({ error: 'An error occurred while fetching the cat' });
    }
}