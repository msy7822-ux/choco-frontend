import { signIn } from 'next-auth/react';
import { Layout } from '../components/Layout';
import { Button, Box, Text, Image, Flex } from '@chakra-ui/react';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
  return (
    <>
      <Layout>
        <Box mt="10rem" textAlign="center">
          <Text
            fontSize="1.2rem"
            color="#848484"
          >
            学生のためのフリマサイト
          </Text>
          <Flex>
            <Image
              mt="1.2rem"
              ml="1.2rem"
              pr="1"
              color="#848484"
              h="5rem"
              w="5rem"
              src="/danball_icon.svg"
              alt="アイコン"
            />
            <Text
              fontSize="5rem"
              color="#848484"
              fontFamily="Quando"
            >
              Choco
            </Text>
          </Flex>
          <Text
            fontSize="1.1rem"
            color="#848484"
            mt="2rem"
          >
            さっそく使ってみる
          </Text>
          <Button
            mt="3rem"
            leftIcon={<FcGoogle />}
            color="#5B5959"
            border="1px solid #9F9F9F"
            bg="#FFF"
            onClick={() => signIn()}
          >
            Googleでログインする
          </Button>
        </Box>
      </Layout>
    </>
  );
}

export default Login;