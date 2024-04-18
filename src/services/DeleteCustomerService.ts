import prismaClient from "../prisma"

interface DeleteCustomer {
    id: string;
}

class DeleteCustomerService{
   async execute({id}:DeleteCustomer){
if (!id) {
    throw new Error('Usuario invalido')
}else{
    const findCustomer = await prismaClient.customer.findFirst({
        where:
        {
            id:id
        }
        });
        if (!findCustomer) {
            throw new Error('Usuario não existe!')
        }
          
         await prismaClient.customer.delete({
            where:{
                id: findCustomer.id
            }
         })

        return {message: "Deletado com sucesso!"};
   }
}
}

export {DeleteCustomerService}