import { articles } from '../../../data';

export default function handler({query: {id}}, res){    

    const filterId = articles.filter(article => article.id === id);

    if(filterId.length > 0){
        res.status(200).json(filterId[0]);
    } else {
        res.status(404).json({msg: `article with the id of ${id} is not found`})
    }
}