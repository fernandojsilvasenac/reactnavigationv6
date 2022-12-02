## https://reactnavigation.org/docs/getting-started/
## yarn add @react-navigation/native
## npx expo install react-native-screens react-native-safe-area-context

## 1 criar a pasta screen e ScreenA, ScreenB, no App.tsx chamo ScreenA

## stack navigation, navegação em pilhas
## https://reactnavigation.org/docs/hello-react-navigation
## yarn add @react-navigation/native-stack

## 2
## organizar a navegação através de uma pasta rotas
## stack.routes.ts

## 3
## /routes/index.tsx
## Criando um contexto de navegação através do arquivo de rotas
## <NavigationContainer>

## 4
## no App.tsx não chamo mais a tela ScreenA e sim a Rota <Routes />

## 5 navegando da tela A para ScreenB
## https://reactnavigation.org/docs/navigating#navigating-to-a-new-screen
## é passado uma propriedade navigation para navegação
## function HomeScreen({ navigation }) {
##  ScreenA.tsx lin 5, 8

## 6 tipar as rotas, criando o @types e deixando de forma global e substituindo o namespace 

## 7 mudar o Título da Tela nas routes
## options para Título, cor background, cor title (headerTintColor), esconder o title (headerShown)
## <Group> usar para agrupar options para várias rotas de uma vez ...lin 18

## 8 método para voltar
## https://reactnavigation.org/docs/navigating#going-back