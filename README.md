# 🗂️ Organizador de Arquivos

Sabe aquela bagunça de arquivos espalhados por tudo quanto é canto? Esse script veio pra resolver isso! Ele organiza seus arquivos automaticamente, jogando cada um em pastas com base nas suas extensões. 

A ideia nasceu de um vídeo que vi no Insta do **1% Programador**. Dei aquela ajustada básica pra ficar do jeito que eu gosto e pra ser mais fácil de usar. 🚀

## ✨ O que ele faz?
- Move arquivos para pastas específicas (imagens, vídeos, documentos, etc.) com base nas extensões.
- Cria as pastas automaticamente, se ainda não existirem.
- Pula arquivos que não estão no mapeamento (nada de quebrar seu fluxo!).
- Mostra no console o que foi movido.
- Se não tiver nada pra mover, avisa também. Simples assim. 😎

## 🔧 Como usar
1. Tenha o [Node.js](https://nodejs.org/) instalado (se ainda não tem, corre lá!).
2. Clone este repositório:
   ```bash
   git clone <url-do-repositorio>

3. Va para pasta do projeto:
    ```cd organizador-de-arquivos

4. Ai só rodar:
    ```node organizar.js

5. Também pode organizar outra pasta 
    ```node organizar.js /caminho/para/sua/pasta

# ⚙️ Configuração
O mapeamento das extensões está no arquivo config.json. Quer personalizar? Só mudar! Exemplo:

Exemplo seria o config.json
{
  "jpg": "imagens",
  "png": "imagens",
  "mp4": "videos",
  "pdf": "documentos"
}

# 🤔 outros detalhes
- Ele ignora pastas, só mexe com arquivos mesmo.
- Se o arquivo já existir na pasta de destino, ele renomeia tipo arquivo (1).extensão.
- Caso nada seja movido, ele avisa no final. 

# 🙌 Agradecimentos
Valeu ao Insta do 1% Programador pela inspiração! Dei aquele toque pessoal pra deixar o script mais prático e do jeito que eu curto.