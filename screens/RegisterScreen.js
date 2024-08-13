import React from 'react';
import { Center, Box, Text, Icon, Button, VStack, FormControl, Input, HStack, Divider, Heading } from 'native-base';
function RegisterScreen({ navigation }) {
  return (
    <Center w="100%">
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{ color: "warmGray.50" }}>
          Регистрация
        </Heading>
        <Heading mt="1" _dark={{ color: "warmGray.200" }} color="coolGray.600" fontWeight="medium" size="xs">
          Заполните данные для продолжения!
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
          <FormControl>
            <FormControl.Label>ФИО</FormControl.Label>
            <Input />
          </FormControl>
          <FormControl>
            <FormControl.Label>Дата рождения</FormControl.Label>
            <Input placeholder='04.04.1986' />
          </FormControl>
          <Button mt="2" colorScheme="indigo">
            Зарегистрироваться
          </Button>
          <HStack mt="6" justifyContent="center">
            <Text fontSize="sm" color="coolGray.600" _dark={{ color: "warmGray.200" }}>
              У меня есть аккаунт{" "}
            </Text>
            <Link _text={{ color: "indigo.500", fontWeight: "medium", fontSize: "sm" }} onPress={() => navigation.navigate('Home')}>
              Войти
            </Link>
          </HStack>
        </VStack>
      </Box>
    </Center>
  );
}

export default RegisterScreen;
