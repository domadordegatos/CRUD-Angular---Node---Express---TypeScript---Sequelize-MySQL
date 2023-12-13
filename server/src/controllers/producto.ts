import { Request, Response} from 'express';
import Producto from '../models/producto';

export const getProducts = async (req:Request, res:Response) =>{
    const listProducts = await Producto.findAll();
    res.json(listProducts)
    /* res.json({
        msg:'get products'
    }) */
}

export const getProduct = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const product = await Producto.findByPk(id);
  
      if (product) {
        res.json(product);
      } else {
        res.status(404).json({ msg: `No se encontró el producto con el id ${id}` });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ msg: 'Error al obtener el producto', error });
    }
  };

export const deleteProduct = async (req:Request, res:Response) =>{
    const {id} = req.params
    const product = await  Producto.findByPk(id)
    if(!product){
        res.status(404).json({ msg: `No se encontró el producto con el id ${id}` });
    }else{
        await product.destroy()
        res.json({msg:'el producto fue eliminado con exito'})
    }
    res.json({
        msg:'delete product',
        id //desde la version 2016 m+cript no es necesario cololar id:id
    })
}

export const postProduct = async (req:Request, res:Response) =>{
    const {body} = req;
    try {
        await Producto.create(body)
        res.json({
            msg:'el producto fue agregado con exito'
        })
    } catch (error) {
        console.log(error);
        res.json({
            msg:'ocurrio un error, comuniquese con soporte'
        })
    }
}

export const updateProduct = async (req:Request, res:Response) =>{
    const {body} = req;
    const {id} = req.params
    const product = await  Producto.findByPk(id)
    try {
        if(product){
            await product.update(body);
            res.json({
                msg:'el producto fue actualizado con exito'
            })
        }else{
            res.status(404).json({
                msg: `No se encontró el producto con el id ${id}`
            })
        }
    } catch (error) {
        console.log(error);
        res.status(404).json({
            msg: `No se encontró el producto con el id ${id}`
        })
    }
    
    
}