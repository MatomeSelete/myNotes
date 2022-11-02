const Pool = require('pg').Pool
const pool = new Pool({

  connectionString: "postgres://sbavrcffykaxcn:2d7f8762f7425bfae69fa6cb1acb6bb7159a2af135b23cecc6597355c0d237e5@ec2-52-71-23-11.compute-1.amazonaws.com:5432/d7t353v9vcv4qk",
  ssl:{
     require: true,
      rejectUnauthorized: false //allows external access to database when using nodejs
  },
  // user: 'mynotes',
  // host: 'localhost',
  // database: 'api',
  // password: '12345',
  // port: 5432,
})


//GET all notes
const getUsers = (request, response) => {
    pool.query('SELECT * FROM mynotes ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

// GET a single notes by ID
const getUserById = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('SELECT * FROM mynotes WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }


//POST new notes
const createUser = (request, response) => {
    const { title, details } = request.body
  
    pool.query('INSERT INTO mynotes (title, details) VALUES ($1, $2) RETURNING *', [title, details], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`User added with ID: ${results.rows[0].id}`)
    })
  }
  

// PUT updated data in an existing notes

const updateUser = (request, response) => {
    const id = parseInt(request.params.id)
    const { title, details } = request.body
  
    pool.query(
      'UPDATE mynotes SET title = $1, details = $2 WHERE id = $3',
      [title, details, id],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`User modified with ID: ${id}`)
      }
    )
  }

// DELETE a notes
const deleteUser = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('DELETE FROM mynotes WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send({message:`user deleted with ID: ${id}`})
    })
  }


  module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
  }