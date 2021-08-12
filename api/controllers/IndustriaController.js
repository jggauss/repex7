const database = require('../models')

class IndustriaController {
    static async pegaTodasAsIndustrias(req,res) {
        try{
            const todasAsIndustrias = await database.Industrias.findAll()
            return res.status(200).json(todasAsIndustrias)
        } catch (error) {
            return res.status(500).json(error.message)
        }
        
    }

    static async pegaUmaIndustria(req,res) {
        const { id } =  req.params 
        try{
            const umaIndustria =  await database.Industrias.findOne({where: {id: Number(id)}}) 
            return res.status(200).json(umaIndustria)
        } catch (error) {
            return res.status(500).json(error.message)
        }
        
    }

    static async criarUmaIndustria(req,res) {
        const novaIndustria= req.body        
        try{
            const novaIndustriaCriada =  await database.Industrias.create(novaIndustria)
            return res.status(200).json(novaIndustriaCriada)
        } catch (error) {
            return res.status(500).json(error.message)
        }

    }

    static async atualizaIndustria(req,res) {
        const { id  }  = req.params
        const novasInfos = req.body        
        try{
            await database.Industrias.update(novasInfos, {where: {id:Number(id)}})
            const industriaAtualizada = await database.Industrias.findOne({where: {id:Number(id)}})
            return res.status(200).json(industriaAtualizada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async apagaIndustria(req,res) {
        const { id  }  = req.params
        try{
            await database.Industrias.destroy({where: {id:Number(id)}})
            return res.status(200).json({mensagem: `Industria ${id} deletada`})
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }


}

module.exports = IndustriaController