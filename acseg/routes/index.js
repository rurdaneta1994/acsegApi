var mongoose=require('mongoose');

var options = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } }, 
                replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } }; 




//conectandose a la base de datos
mongoose.connect('mongodb://joandvgv:Jonixxla5@host:19370/acseg',options,function(err){
	if(err) console.log('error de conexion')
		else console .log ('conexion establecida');
});


//esquema de la base de datos //


var personasSchema={
	CI:String,
	nombre:String,
	edad:Number,
	sede:String,
	enCampus:Boolean,
	mtrAuto:String
}


var Personas=mongoose.model('personas',personasSchema);



exports.obtenerTodo=function(req,res){
	Personas.find(function(err,personas){
		res.send(personas);
	});
}


exports.obtenerId=function(req,res){
	Personas.findOne(req.params.id,function(err,personas){
		res.send(personas);
	});
};

exports.agregar=function(req,res){
	var data={
		CI=req.body.CI,
		nombre:req.body.nombre,
		edad:req.body.edad,
		sede:req.body.sede,
		enCampus:req.body.enCampus,
		mtrAuto:req.body.mtrAuto
	}

	var persona=new Personas(data);

	persona.save(function(err,resultado){
		if(err){
			console.log('error')
		}else{
			res.send('registro guardado');
		}
	});
};



exports.updateId=function(req,res){
	Personas.findById(req.params.id,function(err,vino){
		CI=req.body.CI,
		nombre:req.body.nombre,
		edad:req.body.edad,
		sede:req.body.sede,
		enCampus:req.body.enCampus,
		mtrAuto:req.body.mtrAuto

 		personas.save(function(err) {
	 		if(err) return res.send(500, err.message);
 				res.status(200).jsonp(personas);
		});

	});
	
	
};



exports.eliminarId=function(req,res){
	Personas.findById(req.params.id,function(err,persona){
		persona.remove(function(err){
			if(err) console.log('error eliminando')
				else console.log('persona eliminado')		
		});
	});
}




