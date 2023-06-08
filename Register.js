import React, { useState } from 'react';
import { Button, Input, VStack, Center } from 'native-base';
import { useNavigation } from '@react-navigation/native';

const Signup = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigation();

    const handleSignup = () => {
        alert('Cadastro bem sucedido!');
        navigation.navigate('Login')
    }

    return (
        <Center flex={1}>
            <VStack space={4} width="90%">
                <Input
                    variant="outline"
                    placeholder="Nome de usuário"
                    value={username}
                    onChangeText={setUsername}
                />
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
                <Button onPress={handleSignup}>Cadastrar</Button>
            </VStack>
        </Center>
    );
}

export default Signup;
