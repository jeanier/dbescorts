const router = require('express-promise-router')();
const mongojs = require('mongojs');

const db = mongojs('DBEscorts', [
  'Modelos'
]);



//BUSCAR EN TODOS
  router.get('/escorts', (req, res, next) => {
    db.Modelos.find((err, Modelos) => {
      if (err) return next(err);
        res.json(Modelos);
      });
    });

//BUSCAR POR ID
    router.get('/escorts/:id', (req, res, next) => {
      db.Modelos.findOne( {_id:mongojs.ObjectId(req.params.id)}, (err, Modelo) => {
        if (err) return next(err);
          res.json(Modelo);
        });
      });

//INSERTAR POR POST
router.post('/escorts', (req, res, next)=>{
   let newEscort = req.body;

   if(!newEscort.Name || !(newEscort.isDone + '')){
      res.status(400).json({
        Error : 'Bad data'
      });
   }else{
     db.Modelos.save(newEscort, (err, newEscort)=>{
       if (err) return next (err);
       res.json(newEscort)
     })
   }
});

//ACTUALIZAR POR ID
  router.put('/escorts/:id', (req, res,next)=>{
    let Modelo = req.body;
    let updatedModelo = {};

    if (Modelo.isDone){
      updatedModelo.isDone = Modelo.isDone;
    }
    if (Modelo.Name){
      updatedModelo.Name = Modelo.Name;
    }

    if (!updatedModelo){
      res.status(400).json({
        error :'Bad Request'
      });
    }else{
        db.Modelos.update(
          {_id:mongojs.ObjectId(req.params.id)}, (err, Modelo)=>{
            if(err) return next(err);
            res.json(Modelo)

            });
          }
      });

//BORRAR POR ID
  router.delete('/escorts/:id', (req, res,next)=>{
    db.Modelos.remove(
      {_id:mongojs.ObjectId(req.params.id)},
      (err, response)=>{
        if (err) return next(err);
        res.json(response);
      });
  });

module.exports = router;
