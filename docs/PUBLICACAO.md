# Última Rota — página e distribuição Windows

**Página pública fixa:** https://leucimar.github.io/ultima-rota/

**Repositório público (somente site e distribuição):** https://github.com/leucimar/ultima-rota

**Publicação:** branch `feature/Ultima_Rota_Page`, pasta `/docs`, no repositório público acima. O código completo do jogo continua privado em `JuninhoPortes/ultima-rota`, com uma cópia dos arquivos da página na branch homônima.

**Download fixo:** https://github.com/leucimar/ultima-rota/releases/latest/download/UltimaRota-Windows-x64.zip

Para atualizar a página, edite os arquivos de `docs` no repositório público e envie para a branch de publicação. O Pages atualiza automaticamente. Não sincronize o repositório privado inteiro para o público.

## Distribuição atual — v1.1.0, 15/11/2026

Build atual gerada a partir de `feature/teste_refatoração-v2`, commit
`48fa2fec49b5fb93391f05119fa24f445d9d88d9` do repositório privado da equipe.

- **Windows x64 / Mono / Unity 6000.3.24f1**, sem Development Build.
- **163074920 bytes (155,5 MiB)**, 197 arquivos no ZIP.
- SHA-256: `b90678e7d4506433948fac924caf81533cd6c8af1bc9a78a1a5b90c42b8b8ba5`.
- Identidade de salvamento mantida: **GameplayCIA / UltimaRota**. Progresso de
  jogadores da distribuição anterior não é apagado; novos perfis começam sem
  recursos e com os níveis básicos.
- Inclui os ajustes de perseguição/colisão, posto, diário, quadrinhos e áudio,
  encerramento e créditos. [Notas completas](RELEASE-1.1.0.md).
- Pacote validado por extração, integridade arquivo a arquivo e inicialização
  fora do Editor: menu, créditos e Voltar, inventário, quatro quadros e floresta.

O site não compila a Unity. O GitHub Pages publica os arquivos HTML/CSS/JS da
pasta `/docs`; o executável vem do **anexo da última release estável**.
O código-fonte do jogo permanece privado. Os registros de versões abaixo são históricos.

## Onde editar

### Distribuição v1.0.0 — 14/11/2026

Executável Windows gerado da `develop`, commit `2714d70`, após a entrada da `feature/gameplay-refactory-v3`. A antiga develop foi preservada em `feature/project_backup`. Foi necessária uma correção de compilação: remover a propriedade exclusiva do Editor `Texture2D.alphaIsTransparency` da criação do retículo. Os pixels RGBA, o desenho da mira e a gameplay foram preservados.

Release estável: **v1.0.0**. ZIP: **UltimaRota-Windows-x64.zip**, **125.884.847 bytes (120,1 MiB)**. SHA-256: `454e4f16910a701cafce18d2e7395a83d79b35a391f755daf3d9e827b87295ba`.

O perfil de distribuição usa **Company Name: GameplayCIA** e **Product Name: UltimaRota**, separado de DefaultCompany e dos perfis CodexValidation usados durante os testes. Os PlayerPrefs ficam fora do pacote. No primeiro uso desse perfil: quatro saldos em zero, melhorias no nível básico 1 (sem bônus), vida 100, bônus de sorte/crítico zero, pistola equipada e fuzil bloqueado. A progressão de partidas posteriores continua persistindo normalmente; não há reset em toda inicialização.

Para builds oficiais futuras, mantenha essa identidade em Player Settings e altere somente a versão. Assim o progresso legítimo dos jogadores é preservado. A distribuição v1.0.0 foi gerada com Unity 6000.3.24f1, Windows x64/Mono, fora de Development Build. O ZIP contém todos os dados e DLLs necessários, o runtime Mono e LEIA-ME.txt; pastas de debug e caches do editor foram excluídas.

Verificação: 81 checagens de progressão e fluxo nas cinco cenas, inicialização do executável fora da Unity, perfil standalone sem bônus e integridade dos 175 arquivos do ZIP. Os endereços permanentes da página e do download foram mantidos.

Código da página: `docs/index.html`, `docs/style.css`, `docs/script.js` e `docs/site-config.js`, na branch `feature/Ultima_Rota_Page`, criada a partir de `feature/gameplay_refactory`.

As imagens dos cenários ficam em `docs/assets/screenshot1.png` a `screenshot4.png`. Os retratos dos inimigos ficam em `zumbi-normal.png`, `zumbi-corredor.png` e `zumbi-tanque.png`, na mesma pasta. Substitua os arquivos mantendo os nomes. O complemento visual da revisão de novembro está em `docs/refresh.css`. A página usa HTML/CSS puros, sem instalação de dependências ou etapa de compilação. As fontes vêm do Google Fonts, com alternativas locais caso a rede esteja indisponível.

### Revisão de 14/11/2026

Novas capturas dos disparos a partir da branch `feature/gameplay-refactory-v3`, commit `82a2dd4`, incluindo os traçantes atuais das balas. Os parágrafos de leitura foram justificados, os elementos decorativos de norte e os avisos de versão foram removidos da landing page, e os créditos foram atualizados para Gameplay & CIA e seus cinco integrantes. O endereço permanente e os links de download continuam iguais.

### Revisão visual de 13/11/2026

Capturas e retratos atualizados a partir da versão de desenvolvimento `feature/testes-upgrades-v2`, commit `fae7ae5`. Foram usados cenários e sprites reais, renderizados em uma cópia isolada da Unity. Os confrontos foram enquadrados temporariamente para apresentar a arte; não são gravações de uma partida completa.

O ZIP da release **v0.1.0 foi mantido**, sem recompilação, substituição ou alteração de arquivos da release. Ao publicar outro executável, atualize os valores `version`/`size` em `site-config.js` e os metadados equivalentes no HTML.

Os três botões de download, incluindo **Jogue grátis** no cabeçalho, apontam diretamente ao ZIP da última release e funcionam sem JavaScript. O ícone SVG usa `icon-download`, evitando conflito com a seção `download`. Ao trocar imagens/CSS/JS, atualize também o parâmetro de revisão `?v=` no HTML para os visitantes receberem a versão nova.

## Endereço permanente e QR code

O QR code deve apontar para a **URL da página publicada**, nunca para um ZIP, tag de release, preview local ou URL de branch. Não renomeie a conta nem o repositório público de hospedagem depois de imprimir o código.

O botão usa `https://github.com/CONTA/REPOSITORIO/releases/latest/download/UltimaRota-Windows-x64.zip`. Publique todas as versões com esse mesmo nome de asset e marque a versão estável como release mais recente. Assim, o site e o download continuam nos mesmos endereços.

## Ativar GitHub Pages

1. No repositório que hospedará o site, abra **Settings → Pages**.
2. Em **Build and deployment → Source**, escolha **Deploy from a branch**.
3. Neste repositório público, escolha **feature/Ultima_Rota_Page** e a pasta **/docs**, depois **Save**. Essa é a configuração já ativa; mantenha-a nas próximas atualizações.
4. Envie somente os arquivos da página para este repositório. Não envie Assets, scripts C#, Library, caches ou o histórico privado do jogo. Os executáveis ficam anexados às Releases, fora do histórico do site.
5. Aguarde a publicação. A URL de um project site é `https://CONTA.github.io/REPOSITORIO/`. O nome da branch não aparece no endereço.

É necessária permissão de administrador do repositório para configurar Pages. No plano gratuito, o caminho usual é um repositório público. Publicar uma página não torna os assets de uma release privada acessíveis ao público: para download sem login, hospede o ZIP em uma release de um repositório público.

## Gerar e atualizar o executável

1. No repositório privado, selecione a versão do jogo que será distribuída.
   Use **Unity 6000.3.24f1** e abra uma cópia isolada do projeto para preparar
   a distribuição, preservando o checkout de trabalho e seus saves.
2. Na cópia de distribuição, mantenha **Company Name = GameplayCIA** e
   **Product Name = UltimaRota** em Player Settings. Incremente somente a versão.
   Isso mantém o perfil de salvamento da distribuição anterior.
3. Em **File → Build Profiles**, escolha Windows, arquitetura x64 e backend
   Mono. Desmarque Development Build. Inclua, nesta ordem: **MainMenu**,
   **SafeZoneMain**, **SafeZoneMenu**, **ForestRoom1** e **MapaCidade**.
4. Gere `UltimaRota.exe` em uma pasta própria. Compacte o executável junto de
   `UltimaRota_Data`, `MonoBleedingEdge`, DLLs e demais arquivos do runtime.
   Inclua instruções, créditos e versão. Não inclua Library, fontes C#, assets
   brutos, dados de testes ou pastas de debug marcadas DoNotShip/BackUpThisFolder.
5. Nomeie o pacote **UltimaRota-Windows-x64.zip**, confira sua extração e jogue
   a cópia extraída. Gere também `SHA256SUMS.txt` e `LEIA-ME.txt`.
6. Neste repositório público, em **Releases → Draft a new release**, crie uma
   nova tag e anexe o ZIP, checksum, instruções e créditos. Publique como release
   estável e **mais recente**. Preserve as releases anteriores.
7. Atualize `version`/`size` em `docs/site-config.js`, os textos equivalentes
   em `docs/index.html` (fallback sem JavaScript), o parâmetro de cache do script
   e a indicação no README. Envie apenas os arquivos do site para a branch
   `feature/Ultima_Rota_Page`.
8. Aguarde o Pages publicar e valide o botão sem login: o endereço permanente
   deve redirecionar à tag nova. Confira tamanho e SHA-256 do arquivo baixado.

Os arquivos da build já publicados são anexos da release, fora do histórico Git
da página. **Fazer commit/push do código do jogo não recompila nem atualiza esses
anexos automaticamente.** Mantenha o nome do ZIP e o endereço do Pages para
preservar os botões e o QR code.

## Validação e requisitos

O build inclui MainMenu, SafeZoneMain, SafeZoneMenu, ForestRoom1 e MapaCidade, com Windows x64 e runtime Mono. Não precisa da Unity instalada para executar. A tabela da página apresenta compatibilidade e uma configuração inicial sugerida, não um benchmark de requisitos mínimos medidos.

Referências: [publicar a partir de uma branch](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site), [link permanente para a última release](https://docs.github.com/en/repositories/releasing-projects-on-github/linking-to-releases), [build Unity por linha de comando](https://docs.unity.com/en-us/engine/6000.0/manual/building-and-publishing/build-command-line).
