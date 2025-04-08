# Meals-App

Meals-App é um aplicativo de receitas desenvolvido com [Expo](https://expo.dev/) e [React Native](https://reactnative.dev/). O aplicativo permite explorar diversas categorias de refeições, visualizar detalhes específicos de cada refeição e gerenciar uma lista de favoritos usando um contexto global.

Meals-App is a meals application built with [Expo](https://expo.dev/) and [React Native](https://reactnative.dev/). The app allows you to explore various meal categories, view detailed information about each meal, and manage a list of favorites using a global context.

---

## Funcionalidades / Features

- **Categorias de Refeições / Meal Categories:**  
  Exibe uma lista de categorias de refeições para facilitar a navegação.  
  Displays a list of meal categories for easy navigation.

- **Detalhes da Refeição / Meal Details:**  
  Mostra informações detalhadas sobre cada refeição, como ingredientes, modo de preparo, duração, complexidade e custo.  
  Shows detailed information about each meal, including ingredients, preparation steps, duration, complexity, and affordability.

- **Gerenciamento de Favoritos / Favorites Management:**  
  Permite ao usuário adicionar e remover refeições dos favoritos, armazenando essas informações globalmente com o contexto.  
  Allows the user to add or remove meals from favorites, managing this information globally using context.

- **Navegação Intuitiva / Intuitive Navigation:**  
  Utiliza Stack Navigator e Drawer Navigator para fornecer uma experiência de navegação fluida entre as diferentes telas do aplicativo.  
  Utilizes Stack Navigator and Drawer Navigator for smooth navigation between the app's different screens.

---

## Estrutura do Projeto / Project Structure

- **src/screens/**:  
  Contém as telas principais do aplicativo.  
  Contains the main screens of the app.

  - `CategoriesScreen.tsx`: Exibe as categorias de refeições.
  - `MealsOverviewScreen.tsx`: Mostra a lista de refeições relacionadas à categoria selecionada.
  - `MealDetailScreen.tsx`: Exibe os detalhes da refeição e permite adicioná-la aos favoritos.
  - `FavoritesScreen.tsx`: Lista todas as refeições marcadas como favoritas.

- **src/components/**:  
  Componentes reutilizáveis que compõem a interface do aplicativo.  
  Reusable components that make up the app's interface.

  - `CategoryGridTile.tsx`: Componente para exibição de uma categoria em formato de grade.
  - `MealsList/MealItem.tsx`: Componente que representa uma refeição na lista.
  - `MealDetails.tsx`: Exibe detalhes resumidos de uma refeição.
  - `IconButton.tsx`: Um botão com ícone, utilizado para ações como favoritar.

- **src/data/**:  
  Contém dados de exemplo (dummy data) para as categorias e refeições, como em `dummy-data.ts`.

- **src/models/**:  
  Modelos de dados, como as classes `Category` e `Meal`.

- **src/store/context/**:  
  Gerencia o estado global relativos aos favoritos com o arquivo `favorite-context.tsx`.

- **src/ui/**:  
  Componentes de interface genéricos, como `List.tsx` e `Subtitle.tsx`.

---

## Instalação / Installation

1. **Clone o repositório:**

   ```sh
   git clone <URL_DO_REPOSITÓRIO>
   cd Meals-App
   ```

2. **Instale as dependências:**

   Se estiver utilizando **npm**:

   ```sh
   npm install
   ```

   Ou, se estiver utilizando **Bun**:

   ```sh
   bun install
   ```

3. **Inicie o projeto:**

   ```sh
   npm start
   ```

   Isso iniciará o Expo, permitindo que você execute o aplicativo em um dispositivo físico, emulador ou no navegador.

---

## Uso / Usage

### 📂 Navegação / Navigation

- Utilize o menu lateral (Drawer Navigator) para acessar as diferentes seções, como categorias de refeições e favoritos.
- Selecione uma categoria para visualizar as refeições correspondentes.
- Use the drawer navigation to access different sections such as meal categories and favorites.
- Select a category to view its corresponding meals.

### 🍽 Detalhes da Refeição / Meal Details

- Toque em uma refeição listada para ver seus detalhes, como ingredientes, passos de preparo, duração, complexidade e preços.
- Tap on a listed meal to view its details, including ingredients, preparation steps, duration, complexity, and affordability.

### ⭐ Favoritos / Favorites

- Na tela de detalhes, toque no ícone de estrela para adicionar ou remover uma refeição dos favoritos.
- Você pode acessar a lista de favoritos através do menu lateral.
- On the details screen, tap the star icon to add or remove a meal from your favorites.
- Access the favorites list from the drawer menu.

---

## Scripts Disponíveis / Available Scripts

- `start`: Inicia o Expo no modo de desenvolvimento.
- `android`: Executa o aplicativo em um dispositivo ou emulador Android.
- `ios`: Executa o aplicativo em um dispositivo ou emulador iOS.
- `web`: Executa o aplicativo no navegador.

📄 Consulte o arquivo `package.json` para mais detalhes.

---

## Tecnologias Utilizadas / Technologies Used

- React Native
- Expo
- React Navigation
- TypeScript

---

## Contribuição / Contributing

Contribuições são bem-vindas! Siga os passos abaixo para contribuir:

1. Faça um fork do repositório.
2. Crie uma branch para a sua feature ou correção de bug:
   ```sh
   git checkout -b minha-feature
   ```
3. Faça commit das suas alterações:
   ```sh
   git commit -m "Minha contribuição"
   ```
4. Faça o push para a branch:
   ```sh
   git push origin minha-feature
   ```
5. Abra um Pull Request para revisão.

---

Contributions are welcome! Follow these steps to contribute:

1. Fork the repository.
2. Create a branch for your feature or bug fix:
   ```sh
   git checkout -b my-feature
   ```
3. Commit your changes:
   ```sh
   git commit -m "My contribution"
   ```
4. Push the branch:
   ```sh
   git push origin my-feature
   ```
5. Open a Pull Request for review.

---

## Licença / License

Este projeto está licenciado sob a Licença MIT.  
This project is licensed under the MIT License.
