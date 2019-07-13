import property from '../models/property.model';
import user from '../models/users.model';

class Property{
    static createProperty(req,res){
         const { email, price, city, type, state, address } = req.body;
        const isUserExist = user.find(p=>p.email===email)
 
    if (!isUserExist) {
            return res.status(400).send({
                 status: 401, 
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
      static deleteProperty(req, res) {
        const findProperty = property.find(p => p.id === parseInt(req.params.id));
        if (!findProperty) {
            return res.status(404).send({ status: 404, message: "not found" });
        }
        property.splice(property.indexOf(findProperty), 1);
        res.status(200).send({ status: 200, message: "succefully deleted" });
    }

}
export default Property; 
