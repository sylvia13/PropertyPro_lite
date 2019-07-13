import property from '../models/property.model';
import user from '../models/users.model';

class Property{
    static createProperty(req,res){
         const { email, price, city, type, state, address } = req.body;
        const isUserExist = user.find(p=>p.email===email)
 
    if (!isUserExist) {
            return res.status(400).send({
                 status: 400, 
                 message: "User not exist" 
                });
        }
        const newProperty = {
            id: property.length + 1,
            email,
            status: "available",
            price,
            state,
            city,
            address,
            type,
            created_on: new Date(),
            
        }

        if (newProperty)
            property.push(newProperty);
        res.status(201).send({
            status: "success",
            data: newProperty
        });
    }

    
}
export default Property; 
