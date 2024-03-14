import { 
  Box,
  Button, 
  ButtonGroup, 
  Card, 
  CardBody, 
  CardFooter, 
  Divider, 
  HStack, 
  Heading, 
  Icon, 
  Image, 
  Link, 
  Stack, 
  Text } from "@chakra-ui/react"
import { cardList } from '../data';
import { BsArrowRight } from "react-icons/bs";

export const ProjectCard = () => {

  return (
    <>
    <Box marginLeft={7} marginY='20px'>
      <Heading>
        <Text 
        fontSize={{
            base: '30px',
            sm: '40px',
            md: '50px',
            lg: '50px'
          }}
          color='#fff'>
          My Projects
        </Text>
      </Heading>
      <Box w='160px' h={2} bg='red.600' marginY={2}></Box>
    </Box>
    <HStack padding={3} flexWrap='wrap'>
      { cardList.map((card, index) => 
          <Card maxW='sm' bg='gray.800' margin={3} boxShadow='dark-lg' key={index}>
            <CardBody>
              <Stack>
                <Image src={card.cardImage} borderRadius={5}/>
                <Heading color='#fff'>
                  { card.projectName }
                </Heading>
                <Divider />
                <Text color='#fff'>
                  { card.descriptions }
                </Text>
              </Stack>
              <Divider marginTop={7}/>
            </CardBody>
            <CardFooter marginBottom={4}>
              <ButtonGroup>
                <Link href={card.projectLink} target='_blank'>
                  <Button bg='red.600' color='#fff'>
                    { card.viewProject }
                    <Icon paddingLeft={2} as={BsArrowRight} boxSize={6} />
                  </Button>
                </Link>
                <Link href={card.gitHubLink} target='_blank'>
                  <Button bg='red.600' color='#fff'>
                    { card.viewGithub }
                    <Icon paddingLeft={2} as={BsArrowRight} boxSize={6} />
                  </Button>
                </Link>
              </ButtonGroup>
            </CardFooter>
          </Card>
        )}
      </HStack>
    </>
  )
}
