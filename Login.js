import React, { useState } from 'react';
import { Button, Input, VStack, Center, Box, Link } from 'native-base';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigation();

    const handleLogin = () => {
        alert('Login bem sucedido!');
        navigation.navigate('Main')
    }

    return (
        <Center flex={1}>
            <VStack space={4} width="90%">
                <Input
                    variant="outline"
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                />
                <Input
                    variant="outline"
                    placeholder="Senha"
                    type="password"
                    value={password}
                    onChangeText={setPassword}
                />
                <Button onPress={handleLogin}>Entrar</Button>
                <Box>
                    <Link onPress={() => navigation.navigate('Signup')}>Criar uma conta</Link>
                </Box>
                <Box>
                    <Link>Esqueceu a senha?</Link>
                </Box>
            </VStack>
        </Center>
    );
}

export default Login;
