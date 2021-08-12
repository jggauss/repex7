const database = require('../models')

class VendedorController {
    static async pegaTodosOsVendedores(req,res) {
        try{
            const todosOsClientes = await database.Vendedores.findAll()
            return res.status(200).json(todosOsClientes)
        } catch (error) {
            return res.status(500).json(error.message)
        }
        
    }

    static async pegaUmVendedor(req,res) {
        const { id } =  req.params 
        try{
            const umCliente =  await database.Vendedores.findOne({where: {id: Number(id)}}) 
            return res.status(200).json(umCliente)
        } catch (error) {
            return res.status(500).json(error.message)
        }
        
    }

    static async criarUmVendedor(req,res) {
        const novoCliente= req.body        
        try{
            const novoClienteCriado =  await database.Vendedores.create(novoCliente)
            return res.status(200).json(novoClienteCriado)
        } catch (error) {
            return res.status(500).json(error.message)
        }

    }

    static async atualizaVendedor(req,res) {
        const { id  }  = req.params
        const novasInfos = req.body        
        try{
            await database.Vendedores.update(novasInfos, {where: {id:Number(id)}})
            const clienteAtualizado = await database.Vendedores.findOne({where: {id:Number(id)}})
            return res.status(200).json(clienteAtualizado)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async apagaVendedor(req,res) {
        const { id  }  = req.params
        try{
            await database.Vendedores.destroy({where: {id:Number(id)}})
            return res.status(200).json({mensagem: `Vendedor ${id} deletado`})
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }


}

module.exports = VendedorController