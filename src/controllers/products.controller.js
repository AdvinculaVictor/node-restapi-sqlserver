import {
  getConnection,
  sql,
} from '../database/connection';

export const getProducts = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query("SELECT * FROM Productos");
    res.json(result.recordset);    
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }

};

export const createProduct = async (req, res) => {
  const { Descripcion, Marca, Precio} = req.body;
  let { Stock } = req.body;

  if(Descripcion == null || Marca == null){
    return res.status(400).json({msg: 'Bad Request. Please fill in all fields'});
  }

  if(Stock == null) Stock = 0;

  try {
    const pool = await getConnection();
  
    await pool.request()
    .input("descripcion", sql.VarChar, Descripcion)
    .input("marca", sql.VarChar, Marca)
    .input("precio", sql.Int, Precio)  
    .input("stock", sql.Int, Stock)
    .query('INSERT INTO Productos (Descripcion, Marca, Precio, Stock) VALUES (@descripcion, @marca, @precio, @stock)');
  
    res.json({Descripcion, Marca, Precio, Stock});
  } catch (error) {
    res.status(500);
    res.send(error.message);    
  }
}