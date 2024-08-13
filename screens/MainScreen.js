import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Center, Box, Text, Icon, Button, VStack, FormControl, Input, HStack, Divider } from 'native-base';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

function HomeTab() {
  return (
    <Center flex={1} bg="light.100">
      <Box p="4">
        <Text>Профиль</Text>
      </Box>
    </Center>
  );
}

function ProfileTab() {
    return (
      <Center flex={1} bg="light.100">
        <Box p="4" flex={1} w="100%">
          <HStack justifyContent="space-between" alignItems="center">
            <Text fontSize="lg" fontWeight="bold">Профиль</Text>
            <Button
              onPress={() => console.log('Редактировать')}
              colorScheme="indigo"
              size="sm"
              leftIcon={<Icon as={MaterialCommunityIcons} name="pencil" size="sm" />}
            >
              Редактировать
            </Button>
          </HStack>
  
          <VStack space={4} mt="4">
            <Box p="4" bg="white" borderRadius="md" shadow="2">
              <FormControl>
                <FormControl.Label>Email</FormControl.Label>
                <Input value="user@example.com" isReadOnly />
              </FormControl>
              <FormControl mt="3">
                <FormControl.Label>Пароль</FormControl.Label>
                <Input value="********" isReadOnly />
              </FormControl>
              <FormControl mt="3">
                <FormControl.Label>ФИО</FormControl.Label>
                <Input value="Иванов Иван Иванович" isReadOnly />
              </FormControl>
              <FormControl mt="3">
                <FormControl.Label>Дата рождения</FormControl.Label>
                <Input value="01.01.1990" isReadOnly />
              </FormControl>
            </Box>
          </VStack>
        </Box>
      </Center>
    );
  }

function CartTab() {
    return (
      <Center flex={1} bg="light.100">
        <Box p="4" flex={1} w="100%">
          <HStack justifyContent="space-between" alignItems="center">
            <Text fontSize="lg" fontWeight="bold">Препараты</Text>
            <Button
              onPress={() => console.log('Добавить')}
              colorScheme="indigo"
              size="sm"
              leftIcon={<Icon as={MaterialCommunityIcons} name="plus" size="sm" />}
            >
              Добавить
            </Button>
          </HStack>
  
          <VStack space={3} mt="4">
            <Box p="3" bg="white" borderRadius="md" shadow="2">
              <Text fontWeight="bold">Парацетомол</Text>
              <Text>Количество: 10</Text>
            </Box>
            <Divider my="2" />
            <Box p="3" bg="white" borderRadius="md" shadow="2">
              <Text fontWeight="bold">Ксилен</Text>
              <Text>Количество: 5</Text>
            </Box>
            <Divider my="2" />
            <Box p="3" bg="white" borderRadius="md" shadow="2">
              <Text fontWeight="bold">Морфий</Text>
              <Text>Количество: 20</Text>
            </Box>
          </VStack>
        </Box>
      </Center>
    );
  }

function MainScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Врач"
        component={ProfileTab   }
        options={{
          tabBarLabel: 'Врач',
          tabBarIcon: ({ color, size }) => (
            <Icon as={MaterialCommunityIcons} name="face-man-profile" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Склад"
        component={CartTab}
        options={{
          tabBarLabel: 'Склад',
          tabBarIcon: ({ color, size }) => (
            <Icon as={MaterialCommunityIcons} name="cart" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Расписание"
        component={ProfileTab}
        options={{
          tabBarLabel: 'Расписание',
          tabBarIcon: ({ color, size }) => (
            <Icon as={MaterialCommunityIcons} name="calendar" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Пациенты"
        component={ProfileTab}
        options={{
          tabBarLabel: 'Пациенты',
          tabBarIcon: ({ color, size }) => (
            <Icon as={MaterialCommunityIcons} name="nature-people" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MainScreen;
