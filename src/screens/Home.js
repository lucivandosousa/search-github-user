import { Button, Center, Heading, Input, StatusBar, Text, VStack } from 'native-base'
import React, { useState } from 'react'

export default function Home({ navigation }) {

  const [userLogin, setUserLogin] = useState("")

  function searchUser() {
    navigation.navigate('DetailsUser', { userLogin })
    setUserLogin("")
  }

  return (
    <Center flex={1} bgColor={"coolGray.300"}>
      <VStack alignItems={'center'} justifyContent={'center'} space={4} paddingX={10} width={'full'}>
        <Heading>Buscar repositórios</Heading>
        <Text>Busque repositórios no GitHub</Text>
        <Input
          placeholder='User GitHub'
          colorScheme={'indigo'}
          bgColor={'coolGray.100'}
          value={userLogin}
          onChangeText={setUserLogin}
        />
        <Button
          width={'full'}
          colorScheme={'indigo'}
          onPress={searchUser}
        >
          Buscar
        </Button>
      </VStack>
      <StatusBar />
    </Center>
  )
}
