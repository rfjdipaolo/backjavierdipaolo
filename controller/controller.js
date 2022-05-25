const {check,validationResult,body } = require('express-validator');
const req = require('express/lib/request');
const { Cliente} = require('../models/model')

const vistaUno = (req, res)=>{
    res.render('index', { title: 'Express' });
}
const vistaCliente = async (req, res) => {
      const casa = await Cliente.find()
      res.json({casa})
}

const crearCliente = async (req, res) =>{
      try { 
           const error= validationResult(req)
           if (error.isEmpty()){
          const save = new Cliente(req.body);
          await save.save() 
          res.status(201).json({msg:"el cliente ha sido creado satisfactoriamente", save})
           } else {
             res.status(501).json(error)
            }
          } catch (err) { res.status(501).json({msg:"no se puede cargar el cliente",err})
     }   
    }   
     
 const editarCliente = async (req , res,) => {
    const {id} = req.params
     
     try { let usuario= await Cliente.findByIdAndUpdate(id , req.body)
        
     
       if (usuario === null) {res.json({msg: "no se edito"})
       
                             }
     res.status(201).json({usuario,  msg: "edicion correcta"})
    }
          catch(milanesa) {
         res.status(501).json({msg: "napolitana con papas fritas", milanesa})
              
     }
     }
       


 const deleteCliente = async (req, res) => {
       try { let user= await Cliente.findByIdAndDelete(req.params.id )
        if (user === null) {res.json({msg: "no se borro"})
                               }

          res.status(400).json({msg: "cliente borrado" ,user })
        }
        catch(error) {
            res.status(400).json({msg: "error al borrar el cliente", error})
        }
    }



    



module.exports = {vistaUno, crearCliente, vistaCliente, editarCliente, deleteCliente  }
