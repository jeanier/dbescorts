module.exports = app =>{
    app.get('/cualquier', (req, res)=>{
      res.json({
        response : "API Works"
      });
    });
  }
