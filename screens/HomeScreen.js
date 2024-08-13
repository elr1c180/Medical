import React from 'react';
import { Button, Center, Box, Heading, VStack, FormControl, Input, HStack, Text, Link } from 'native-base';

function HomeScreen({ navigation }) {
  return (
    <Center w="100%">
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{ color: "warmGray.50" }}>
          Добро пожаловать
        </Heading>
        <Heading mt="1" _dark={{ color: "warmGray.200" }} color="coolGray.600" fontWeight="medium" size="xs">
          Войдите для продолжения!
        </Heading>

        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Email</FormControl.Label>
            <Input />
          </FormControl>
          <FormControl>
            <FormControl.Label>Пароль</FormControl.Label>
            <Input type="password" />
          </FormControl>
          <Button mt="2" colorScheme="indigo" onPress={() => navigation.navigate('Main')}>
            Войти
          </Button>
          <HStack mt="6" justifyContent="center">
            <Text fontSize="sm" color="coolGray.600" _dark={{ color: "warmGray.200" }}>
              Нет аккаунта?{" "}
            </Text>
            <Link _text={{ color: "indigo.500", fontWeight: "medium", fontSize: "sm" }} onPress={() => navigation.navigate('Register')}>
              Создать аккаунт
            </Link>
          </HStack>
        </VStack>
      </Box>
    </Center>
  );
}

export default HomeScreen;
