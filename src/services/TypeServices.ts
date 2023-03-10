
import { TypeUser } from "@prisma/client";
import TypeRepository from "../repositories/TypeRepository";

class TypeService {
    getTypes(): Promise<Array<TypeUser>>{
        return TypeRepository.getTypes();
    }

    getType(id: string): Promise<any>{
        return TypeRepository.getType(id);
        
    }
    
    getTypeUser(type: string): Promise<TypeUser>{
        return TypeRepository.getTypeUser(type);
        
    }

    createType(dados:string): Promise<TypeUser>{
        return TypeRepository.createType(dados);
    }

    uptadeType(id:string, dados:TypeUser): Promise<TypeUser>{
        return TypeRepository.uptadeType(id,dados);
    }

    deleteType(id:string): Promise<any>{
        return TypeRepository.deleteType(id);
    }

}

export default new TypeService();