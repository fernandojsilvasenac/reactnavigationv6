//COR de navegação do @react-navigation
//Ele é como um contexto  de navegação e dentro trazemos as nossas Rotas!
import { NavigationContainer } from '@react-navigation/native';
import { AppRoutes } from './app.routes'


export function Routes(){
    return(
        <NavigationContainer>
            <AppRoutes />
        </NavigationContainer>
    )
}