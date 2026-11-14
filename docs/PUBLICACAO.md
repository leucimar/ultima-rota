# Última Rota — página e distribuição Windows

**Página pública fixa:** https://leucimar.github.io/ultima-rota/

**Repositório público (somente site e distribuição):** https://github.com/leucimar/ultima-rota

**Publicação:** branch `feature/Ultima_Rota_Page`, pasta `/docs`, no repositório público acima. O código completo do jogo continua privado em `JuninhoPortes/ultima-rota`, com uma cópia dos arquivos da página na branch homônima.

**Download fixo:** https://github.com/leucimar/ultima-rota/releases/latest/download/UltimaRota-Windows-x64.zip

Para atualizar a página, edite os arquivos de `docs` no repositório público e envie para a branch de publicação. O Pages atualiza automaticamente. Não sincronize o repositório privado inteiro para o público.

## Onde editar

Código da página: `docs/index.html`, `docs/style.css`, `docs/script.js` e `docs/site-config.js`, na branch `feature/Ultima_Rota_Page`, criada a partir de `feature/gameplay_refactory`.

As imagens dos cenários ficam em `docs/assets/screenshot1.png` a `screenshot4.png`. Os retratos dos inimigos ficam em `zumbi-normal.png`, `zumbi-corredor.png` e `zumbi-tanque.png`, na mesma pasta. Substitua os arquivos mantendo os nomes. O complemento visual da revisão de novembro está em `docs/refresh.css`. A página usa HTML/CSS puros, sem instalação de dependências ou etapa de compilação. As fontes vêm do Google Fonts, com alternativas locais caso a rede esteja indisponível.

### Revisão visual de 13/11/2026

Capturas e retratos atualizados a partir da versão de desenvolvimento `feature/testes-upgrades-v2`, commit `fae7ae5`. Foram usados cenários e sprites reais, renderizados em uma cópia isolada da Unity. Os confrontos foram enquadrados temporariamente para apresentar a arte; não são gravações de uma partida completa.

O ZIP da release **v0.1.0 foi mantido**, sem recompilação, substituição ou alteração de arquivos da release. A página informa que as imagens mostram uma versão em desenvolvimento mais recente que o executável disponível. Ao publicar um novo executável com o visual atualizado, revise esse aviso e os valores `version`/`size` em `site-config.js`.

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

1. Use exatamente **Unity 6000.3.24f1**, com Windows Build Support instalado. Feche a Unity neste checkout antes de usar a linha de comando, ou gere por **Ferramentas → Ultima Rota → Gerar distribuição Windows**.
2. Execute `Tools/Build-Windows.ps1`, informando `-UnityEditor` se a instalação estiver em outro caminho. O ZIP fica em `Builds/UltimaRota-Windows-x64.zip` e os caches/builds permanecem ignorados pelo Git.
3. Teste a pasta extraída. O executável precisa acompanhar `UltimaRota_Data`, `MonoBleedingEdge`, `UnityPlayer.dll` e os demais arquivos de runtime; distribuir somente o `.exe` não funciona.
4. Em **Releases → Draft a new release**, crie uma nova tag para a versão, selecione o commit correspondente, anexe `UltimaRota-Windows-x64.zip`, as instruções e o SHA-256. Publique como release estável/mais recente.
5. Se desejar mostrar nova versão e tamanho na página, atualize `version` e `size` em `site-config.js`. O endereço do botão e o QR code não mudam.

Se o download ficar em outro repositório público, atualize `downloadUrl` e `releaseUrl` em `site-config.js` e os links equivalentes do HTML (que são o fallback sem JavaScript). O link dos créditos pode continuar apontando para o repositório original do grupo, indicando que o acesso ao código é privado.

## Validação e requisitos

O build inclui MainMenu, SafeZoneMain, SafeZoneMenu, ForestRoom1 e MapaCidade, com Windows x64 e runtime Mono. Não precisa da Unity instalada para executar. A tabela da página apresenta compatibilidade e uma configuração inicial sugerida, não um benchmark de requisitos mínimos medidos.

Referências: [publicar a partir de uma branch](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site), [link permanente para a última release](https://docs.github.com/en/repositories/releasing-projects-on-github/linking-to-releases), [build Unity por linha de comando](https://docs.unity.com/en-us/engine/6000.0/manual/building-and-publishing/build-command-line).
