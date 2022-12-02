import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
    flex:1;
    padding: 24px;
    justify-content: center ;
    background-color: blue;
`

export const Title = styled.Text`
    align-items:center;
    justify-content: center;
    color: white;
    font-size: 24px;
`;
