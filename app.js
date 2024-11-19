const extensoesParaPastas = require('./config.json');

const fs = require('fs');
const path = require('path');

function organizar(pasta) {
	try {
		const arquivos = fs.readdirSync(pasta);
		let arquivosMovidos = 0;

		for (const arquivo of arquivos) {
			const caminhoOrigem = path.join(pasta, arquivo);

			if (!fs.statSync(caminhoOrigem).isFile()) continue;

			const ext = path.extname(arquivo).slice(1).toLowerCase();
			const pastaDestino = extensoesParaPastas[ext];

			if (pastaDestino) {
				const caminhoDestino = path.join(pasta, pastaDestino);

				if (!fs.existsSync(caminhoDestino)) {
					fs.mkdirSync(caminhoDestino);
				}

				fs.renameSync(caminhoOrigem, path.join(caminhoDestino, arquivo));
				console.log(`Movido: ${arquivo} -> ${pastaDestino}`);
				arquivosMovidos++;
			}
		}

		if (arquivosMovidos === 0) {
			console.log("Já está tudo organizado, não precisou mover nada!");
		}
	} catch (error) {
		console.error("Erro ao organizar arquivos:", error.message);
	}
}

const pasta = path.join(process.env.HOME || process.env.USERPROFILE, 'Documents');
organizar(pasta);