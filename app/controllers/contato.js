var contatos = [
	{_id: 1, nome: 'contact example 1',
	 email: 'cont1@empresa.com.br'},
	 {_id: 2, nome: 'contact example 2',
	 email: 'cont2@empresa.com.br'},
	 {_id: 3, nome: 'contact example 3',
	 email: 'cont3@empresa.com.br'}
];

module.exports = function() {
	var controller = {}
	controller.listaContatos = function (req,res) {
		res.json(contatos);
	};
	controller.obtemContatos = function (req,res) {
		console.log(req.params.id);
	};
	return controller;
};