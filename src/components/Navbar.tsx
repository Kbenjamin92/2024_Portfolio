import { Button, HStack, Heading, Link, Show, Text } from "@chakra-ui/react"
import resume from '../assets/KippBenjaminJr_New_2024_Resume.pdf';

export const Navbar = () => {
  return (
    <>
    <HStack justifyContent='space-between'>
      <Heading>
        <Text>
         Kipp Benjamin Jr Portfolio
        </Text>
      </Heading>
      <Show above='md'>
        <Link href={resume} download>
         <Button bg='red.500'>
            <Text>
              Download Resume
            </Text>
         </Button>
        </Link>
      </Show>
    </HStack>
    </>
  )
}

