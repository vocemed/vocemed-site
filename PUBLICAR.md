# Passo a passo para colocar o site da Vocemed no ar

Para quem só tem o domínio `vocemed.com`. Não é preciso instalar nada nem usar linha de comando.
Tempo total: cerca de 1 hora, mais a espera do DNS (de minutos a 48 horas).

---

## Etapa 0 · Criar a caixa de e-mail contato@vocemed.com (Google Workspace + GoDaddy)
Com o Google Workspace, contato@vocemed.com vira uma caixa de e-mail completa: você recebe e envia com esse endereço, no computador e no app do Gmail no celular. Essa mesma conta serve depois para o Google Analytics.

1. Acesse **workspace.google.com** → **Começar** e escolha o plano **Business Starter** (há teste grátis de 14 dias).
2. Preencha o nome da empresa (Vocemed), o número de pessoas ("só você") e o país (Brasil).
3. Informe um e-mail pessoal para contato. Ele só é usado para recuperar a conta.
4. Quando perguntar sobre o domínio, escolha **"Sim, tenho um domínio"** e digite `vocemed.com`.
5. Crie o usuário **contato** (o endereço fica `contato@vocemed.com`) e uma senha forte.
6. Cadastre a forma de pagamento.
7. **Verificar o domínio e ativar o Gmail:** o Google costuma oferecer **"Entrar na GoDaddy"** e cria os registros sozinho. Aceite essa opção. Se ela não aparecer, crie na GoDaddy (Portfólio de domínios → vocemed.com → DNS):
   - o **TXT** de verificação que o Google mostrar na tela (começa com `google-site-verification=`);
   - **MX** · `@` · `smtp.google.com` · prioridade `1`.
8. Na GoDaddy, **apague** os registros do Forward Email, se você já tiver criado:
   - MX `mx1.forwardemail.net` e MX `mx2.forwardemail.net`;
   - TXT `forward-email=...`.
   Não apague os outros TXT.
9. **SPF:** se já existir um TXT que começa com `v=spf1`, edite e acrescente `include:_spf.google.com` antes do `~all`. Se não existir, crie: TXT · `@` · `v=spf1 include:_spf.google.com ~all`.
10. Espere de 15 minutos a algumas horas e teste: envie um e-mail de outra conta para contato@vocemed.com e responda a ele.
11. Instale o app **Gmail** no celular e entre com contato@vocemed.com.

Mais tarde, no **Admin Console** do Google (admin.google.com → Apps → Gmail → Autenticar e-mail), ative o **DKIM**. Isso faz seus e-mails caírem menos no spam.

------|------|-------|------------|-----|
   | MX   | @    | mx1.forwardemail.net | 0 | 1 hora |
   | MX   | @    | mx2.forwardemail.net | 0 | 1 hora |
   | TXT  | @    | forward-email=contato:seuemail@gmail.com | – | 1 hora |

4. Espere uns 15 minutos e mande um e-mail de teste, de outra conta, para contato@vocemed.com. Ele deve chegar no seu Gmail (olhe também o spam).

Se preferir uma caixa de e-mail própria, com envio e recebimento como contato@vocemed.com, use o Zoho Mail (tem plano grátis) ou o Google Workspace (pago). Nesse caso, use os registros MX do serviço escolhido, e não os do Forward Email.

---

## Etapa 1 · Criar a conta no GitHub (onde os arquivos ficam guardados)
1. Acesse **github.com** → *Sign up* e crie uma conta gratuita.
2. Clique no **+** (canto superior direito) → **New repository**.
3. Em *Repository name*, escreva `vocemed-site`. Deixe **Public** e clique em **Create repository**.
4. Na página seguinte, clique no link **uploading an existing file**.
5. No seu computador, abra a pasta `site` que você baixou. Selecione **tudo o que está dentro dela** (não a pasta em si) e arraste para a página do GitHub.
   - Use o Google Chrome: ele envia as subpastas (`assets`, `fonts`, `tokens`) juntas.
6. Espere todos os arquivos subirem e clique em **Commit changes**.
7. Confira se aparecem na lista: `index.html`, `app.js`, `styles.css`, `privacidade.html` e as pastas `assets`, `fonts` e `tokens`.

---

## Etapa 2 · Publicar na Vercel (o site fica no ar)
1. Acesse **vercel.com** → *Sign Up* → **Continue with GitHub** (usa a conta que você acabou de criar).
2. Escolha o plano **Hobby** (grátis).
3. Clique em **Add New… → Project**, encontre `vocemed-site` e clique em **Import**.
4. Não mude nada nas configurações. Clique em **Deploy**.
5. Em cerca de 1 minuto, aparece um endereço como `vocemed-site.vercel.app`. Abra e confira o site.

---

## Etapa 3 · Ligar o domínio vocemed.com
1. Na Vercel, dentro do projeto: **Settings → Domains**.
2. Digite `vocemed.com` e clique em **Add**. Se perguntar, escolha a opção recomendada, que também adiciona o `www.vocemed.com`.
3. A Vercel mostra os **registros de DNS** a criar. Normalmente são:

   | Tipo  | Nome / Host | Valor                 |
   |-------|-------------|-----------------------|
   | A     | @           | 76.76.21.21           |
   | CNAME | www         | cname.vercel-dns.com  |

   Use sempre os valores que a Vercel mostrar na sua tela.
4. Na **GoDaddy**: **Portfólio de domínios** → **vocemed.com** → aba **DNS**.
   - Procure o registro **A** com nome **@** (costuma estar com o valor "Parked" ou "WebsiteBuilder Site"). Clique no lápis, troque o valor por `76.76.21.21` e salve.
   - Procure o **CNAME** com nome **www** (costuma apontar para `@`). Clique no lápis, troque o valor por `cname.vercel-dns.com` e salve.
   - **Não apague** os registros MX e TXT do e-mail, criados na Etapa 0.
   - Na aba **Encaminhamento** (*Forwarding*), confirme que **não** há encaminhamento de domínio ativo. Se houver, desative.
5. Volte à Vercel e espere os dois domínios ficarem com o ✓ verde. O cadeado (HTTPS) é ativado sozinho.

---

## Etapa 4 · Ativar o formulário
1. Abra **vocemed.com**, preencha o formulário de demonstração com seus dados e envie.
2. Chega um e-mail do **FormSubmit** em contato@vocemed.com. Clique em **Activate Form**.
3. Envie o formulário mais uma vez. Agora o pedido deve chegar no seu e-mail. Se não chegar, olhe a caixa de spam.

---

## Etapa 5 · Google Analytics (opcional, pode ficar para depois)
1. Acesse **analytics.google.com** → *Começar a medir*. Crie a conta "Vocemed" e uma propriedade "vocemed.com".
2. Escolha **Web**, informe `https://vocemed.com` e copie o **ID da métrica**, que começa com `G-`.
3. No GitHub, abra o arquivo `index.html` → ícone de lápis (*Edit*).
4. Procure `G-XXXXXXXXXX`, troque pelo seu ID e clique em **Commit changes**.
5. A Vercel publica a mudança sozinha em cerca de 1 minuto.

---

## Etapa 6 · Política de privacidade
Já preenchida (Vocemed, CNPJ 69.498.965/0001-52, encarregada: Samanta Dall Agnese). Revise o texto com um advogado.

---

## Para mudar algo no site depois
Edite ou substitua o arquivo no GitHub e clique em **Commit changes**. A Vercel atualiza o site sozinha.

## Checklist final
- [ ] contato@vocemed.com recebe e envia e-mails (Google Workspace)
- [ ] Site abre em vocemed.com e www.vocemed.com, com cadeado
- [ ] Formulário ativado no FormSubmit e testado
- [ ] Botão do WhatsApp abre a conversa certa
- [x] Política de privacidade preenchida (falta só a revisão jurídica)
- [ ] Site conferido no celular
