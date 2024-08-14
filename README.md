# BarberShop App

## Descrição

O **BarberShop App** é uma aplicação web desenvolvida para facilitar o agendamento de serviços em barbearias. Os usuários podem selecionar uma barbearia, agendar serviços, cancelar agendamentos, autenticar-se com o Google, pesquisar por barbearias ou serviços e verificar seus agendamentos futuros.

## Funcionalidades

- **Selecionar Barbearia**: Escolha a barbearia onde deseja realizar o serviço.
- **Agendar Serviço e Horário**: Marque um serviço e selecione um horário disponível na barbearia escolhida.
- **Cancelar Agendamento**: Cancele agendamentos futuros se necessário.
- **Autenticação com Google**: Faça login de forma segura usando a autenticação do Google.
- **Pesquisar Barbearia ou Serviço**: Encontre barbearias ou serviços específicos usando a funcionalidade de pesquisa.
- **Verificar Agendamentos**: Visualize seus agendamentos futuros e detalhes associados.

## Tecnologias Utilizadas

- **Next.js**: Framework React para renderização do lado do servidor e geração estática de páginas.
- **React**: Biblioteca JavaScript para construir interfaces de usuário.
- **TypeScript**: Linguagem de programação que adiciona tipagem estática ao JavaScript.
- **Node.js**: Ambiente de execução JavaScript no servidor.
- **PostgreSQL**: Banco de dados relacional para armazenar informações sobre barbearias, serviços e agendamentos.
- **Neon**: Plataforma que fornece uma camada de abstração sobre o PostgreSQL para facilidade de uso e escalabilidade.
- **Tailwind CSS**: Framework de CSS para design responsivo e customização rápida.
- **Google Cloud API**: Para autenticação e outros serviços fornecidos pela Google.

## Instalação

### Requisitos

- Node.js (versão 14 ou superior)
- PostgreSQL
- Conta no Google para autenticação (Google Cloud API)

### Passos

1. **Clone o repositório**

   ```bash
   git clone https://github.com/seuusuario/barbershop-app.git
   cd barbershop-app
   ```

2. **Instale as dependências**

   ```bash
   npm install
   ```

3. **Configure o banco de dados**

   Crie um banco de dados PostgreSQL e configure o arquivo `.env` com as credenciais apropriadas. O arquivo `.env.example` fornece um modelo para as variáveis de ambiente necessárias.

4. **Configure a autenticação do Google**

   Crie um projeto no [Google Cloud Console](https://console.cloud.google.com/), habilite a API de autenticação e obtenha suas credenciais. Adicione as credenciais ao arquivo `.env`.

5. **Execute as migrações do banco de dados**

   ```bash
   npx prisma migrate dev
   ```

6. **Inicie o servidor de desenvolvimento**

   ```bash
   npm run dev
   ```

   O aplicativo estará disponível em [http://localhost:3000](http://localhost:3000).

## Uso

- **Acesse o aplicativo**: Navegue até [http://localhost:3000](http://localhost:3000) para ver a página inicial.
- **Autentique-se com Google**: Use o botão de login do Google para autenticar sua conta.
- **Selecione uma barbearia**: Utilize o menu para escolher a barbearia desejada.
- **Agende um serviço**: Escolha um serviço e um horário disponível.
- **Pesquise por barbearias ou serviços**: Utilize a barra de pesquisa para encontrar opções específicas.
- **Verifique seus agendamentos**: Acesse a seção de agendamentos para ver e gerenciar seus compromissos futuros.
- **Cancele um agendamento**: Na seção de agendamentos, você pode cancelar compromissos futuros se necessário.

## Contribuição

Se você deseja contribuir para o projeto, siga estas etapas:

1. **Fork o repositório**
2. **Crie uma branch para sua funcionalidade** (`git checkout -b minha-funcionalidade`)
3. **Faça suas alterações** e **commit** (`git commit -am 'Adiciona nova funcionalidade'`)
4. **Push** para o branch (`git push origin minha-funcionalidade`)
5. **Crie um pull request**
