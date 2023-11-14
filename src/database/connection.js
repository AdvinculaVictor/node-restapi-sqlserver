import sql from 'mssql';

const dbSettings = {
  user: 'sa',
  password: '<YourStrong@Passw0rd>', 
  server: '66.175.233.172',
  database: 'genericApp',
  options: {
    trustServerCertificate: true
  }
}

export async function getConnection(){
  try{
    const pool = await sql.connect(dbSettings)
    const result = await pool.request().query('SELECT 1');
    console.log(result);    
    return pool;    
  } catch(error){
    console.error(error);
  }
}

export { sql };