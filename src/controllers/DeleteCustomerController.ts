import { FastifyRequest, FastifyReply } from 'fastify'
import { DeleteCustomerService } from '../services/DeleteCustomerService'

class DeleteCustomerController {
   async handle(request: FastifyRequest, reply: FastifyReply){
    const { id } = request.query as {id:string} // Extracting the id from the query parameters
    
        const customerService = new DeleteCustomerService()

        const service = await  customerService.execute({ id });
        reply.send(service);
  
   }

}

export { DeleteCustomerController }