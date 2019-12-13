const axios = require("axios");
const TotalVoice = require("totalvoice-node");
const client = new TotalVoice(process.env.KEY_VOICE);

const servers = [
	{
		name: "Servidor 1",
		url: "http://localhost:8001",
		developer: {
			name: "Thomas R",
			telephone: process.env.THOMASR_PHONE
		}
	},
	{
		name: "Servidor 2",
		url: "http://localhost:8002",
		developer: {
			name: "Thomas R",
			telephone: process.env.THOMASR_PHONE
		}
	}
];

(async function () {
	console.log("Iniciando monitoramento dos servidores");
	for (const server of servers) {
		await axios({
			url: server.url,
			method: "get"
		}).then((response) => {
			console.log(`${server.name} está no ar!`);
		}).catch(() => {
			console.log(`${server.name} está fora do ar!`);
			const message = `${server.developer.name} o ${server.name} está fora do ar, por favor faça alguma coisa o mais rápido possível!`;
		        client.tts.enviar(process.env.THOMASR_PHONE, message,{velocidade:2, tipo_voz: "br-Vitoria"}).then(function (data) {
                console.log(data)
            })
        
		});
	}
	console.log("Finalizando monitoramento dos servidores");
})();