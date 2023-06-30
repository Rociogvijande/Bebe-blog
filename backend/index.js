const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./database.js"); 


const app = express();
const port = process.env.PORT || 3000;

const corsOptions = {
  origin: "http://localhost:3001",
  credentials: true,
};
app.use(cors(corsOptions));

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(
  session({
    secret: process.env.JWT_SECRET || "my-secret-key",
    resave: false,
    saveUninitialized: false,
  })
);


app.get("/posts",  (req, res) => {
    db.query(
      "SELECT id, title, content, date, image  FROM posts ",
      (err, results) => {
        if (err) {
          console.error("Error al obtener los posts:", err);
          res.status(500).json({
            message:
              "Ha ocurrido un error al obtener los posts. Por favor, intenta más tarde.",
          });
          return;
        }
        res.json(results);
      }
    );
  });
  
  app.post("/posts",  (req, res) => {
    const newPost = {
      user_img: req.body.img_post,
      title: req.body.titulo_post,
      content: req.body.contenido_post,
      Id: req.session.Id,
      createdAt: req.session.fecha_post,
    };
  
    if (newPost.title && newPost.content) {
      db.query(
        "INSERT INTO posts (titulo_post, contenido_post, Id, fecha_post, img_post) VALUES (?, ?, ?, ?,?)",
        [
          newPost.title,
          newPost.content,
          newPost.Id,
          newPost.createdAt,
          newPost.user_img
         
        ],
        (err, results) => {
          if (err) {
            console.error("Error al crear el post:", err);
            res.status(500).json({
              message:
                "Ha ocurrido un error al crear el post. Por favor, intenta más tarde.",
            });
            return;
          }
          newPost.id = results.insertId;
          res.status(201).json(newPost);
        }
      );
    } else {
      res
        .status(400)
        .send({ message: "El post debe tener un título y un contenido." });
    }
  });
  
//   // Eliminar un post por su ID
//   app.delete("/posts/:id", authenticateMiddleware, (req, res) => {
//     const postId = req.params.id;
  
//     const sql = "DELETE FROM post WHERE id = ?";
//     db.query(sql, [postId], (err, result) => {
//       if (err) {
//         console.error("Error al eliminar el post:", err);
//         res.status(500).json({
//           message:
//             "Ha ocurrido un error al eliminar el post. Por favor, intenta más tarde.",
//         });
//         return;
//       }
  
//       if (result.affectedRows === 0) {
//         res
//           .status(404)
//           .json({ message: "No se encontró el post con el ID especificado." });
//         return;
//       }
  
//       res.json({ message: "El post ha sido eliminado correctamente." });
//     });
//   });
  
//   // Editar un post por su ID
//   app.put("/posts/:id", (req, res) => {
//     const postId = req.params.id;
//     const { title, content } = req.body;
//     const updatedAt = new Date();
  
//     if (!title && !content) {
//       res.status(400).json({
//         message:
//           "Debes proporcionar al menos un campo (título o contenido) para editar el post.",
//       });
//       return;
//     }
  
//     const sql =
//       "UPDATE post SET title = ?, content = ?, updatedAt = ? WHERE id = ?";
//     db.query(sql, [title, content, updatedAt, postId], (err, result) => {
//       if (err) {
//         console.error("Error al editar el post:", err);
//         res.status(500).json({
//           message:
//             "Ha ocurrido un error al editar el post. Por favor, intenta más tarde.",
//         });
//         return;
//       }
  
//       if (result.affectedRows === 0) {
//         res
//           .status(404)
//           .json({ message: "No se encontró el post con el ID especificado." });
//         return;
//       }
  
//       res.json({ message: "El post ha sido editado correctamente." });
//     });
//   });


app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});