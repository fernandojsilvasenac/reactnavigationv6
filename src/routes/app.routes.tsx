import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScreenA } from '../screens/ScreenA';
import { ScreenB } from '../screens/ScreenB';

const { Screen, Navigator, Group } = createNativeStackNavigator();

// coloque o nome da rota, do tipo UserRoutes, AdminRoutes, AuthRoutes, pra cada contexto de navegação
export function AppRoutes(){
    return(
        // propriedade initialRouteName define qual rota começa primeiro, 
        // mas se não definir vai carregar a primeira
        // <Navigator initialRouteName='screenB'>
        <Navigator>
            <Screen 
                name='screenA'
                options={{ 
                    headerShown: false, //remover cabeçalho
                }}
                component={ScreenA}
            />
            <Group
                screenOptions={{ 

                }}
            >
                <Screen 
                    name='screenB'
                    options={{ 
                        title: 'Tela B',
                        headerTitleAlign: 'center',
                        headerStyle:{
                            backgroundColor: 'green'
                        },
                        headerTintColor: '#fff'
                    }}
                    component={ScreenB}
                />
            </Group>
            
        </Navigator>
    )
}