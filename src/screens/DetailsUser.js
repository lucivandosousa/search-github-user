import axios from "axios";
import {
  Avatar,
  Button,
  Center,
  Heading,
  StatusBar,
  Text,
  VStack
} from "native-base";
import { useEffect, useState } from "react";

export default function DetailsUser({ route, navigation }) {

  const [user, setUser] = useState({})

  const { userLogin } = route.params

  useEffect(() => {
    async function fetchUser() {
      const response = await axios.get(`https://api.github.com/users/${userLogin}`)
      setUser(response.data)
    }

    fetchUser()
  }, [])

  return (
    <Center flex={1} bgColor={"coolGray.300"}>
      <VStack alignItems={"center"} justifyContent={"center"} space={4} paddingX={10} width={'full'}>
        <Avatar
          source={{ uri: user.avatar_url }}
          size={"2xl"}
          alignSelf="center"
          borderWidth={4}
          borderColor={"blueGray.500"}
        />
        <Heading>{user.name}</Heading>
        <Text>{user.location}</Text>
        <Text>{user.bio}</Text>
        <Button
          colorScheme={"indigo"}
          mt={10}
          w={'full'}
          onPress={() => navigation.navigate("Home")}
        >
          Voltar
        </Button>
      </VStack>
      <StatusBar />
    </Center>
  )
}
