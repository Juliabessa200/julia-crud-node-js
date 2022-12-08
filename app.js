const express = require("express");
const User = require('./models/User');

const app = express(); 

app.use(express.json());


app.post("/user", async (req, res) => { 
 const { name, email ) = req.body; 

await User.create(req.body)

.then(() => {
return res.json({ erro: false,
mensagem: "Usuário cadastrado com sucesso!"

}).catch(()->{
return res.status(408).json({ mensagem: "Erro: Usuário não cadastrado com sucesso!"
 erro: true,

    });
 });

});



app.get("/users", async (req, res) => {

    await User.findAll()
    .then(users) =>{
        return res.json({
            erro: false,
            users
        });
        

    }).catch(() =>{
        return res.status(400).json({
            erro:true,
            mensagem: 'erro: Nenhum usuario encontrado!'
        });
    });
 
    app.get("/user/:id", async (req, res) => {
        
        await User, findByPk(id)/
        return res.json({
        erro: false,
        user:user
    });
        }).catch(()=>
         return res.status(408).json({
         erro: true,
         mensagen: "Erro: Nenhum usuário encontrado!"
        
        });
    });

    app.put async ("/user", res)  => {
    const {id} = req.body;
    
    await User.update(req.body,{were: {id}})
    .then(() => {
    return res.json({
        erro: false,
        mensagem: "usuario editado com sucesso!"
    
    });
    

    
 }).catch(() => {
    return res.status(488).json({
    erro: true, 
    mensagem: "Erro: Usuário não editado com sucesso!"
    
    });
    
    
    });
    
    });

    app.delete("/user/:id", async (req, res) => {
        const {id} = req.params;
        
        await User.destroy({ where: (id)))
        .then(() => {
        
        return res.json({
        erro: false, 
        mensagem: "Usuário apgado com sucesso!"
        
        
        }).catch(() => {
        
        return res.status(408).json({ erro: true,
        erro: false,
        mensagem: "Erro: Usuário não apgado com sucesso!"
        
        });
        
        
        });
        
        });
        
        
         app.listen(8080, () => {
        
        });
        
        console.log("Servidor iniciado na porta 8888: http://localhost:8080");