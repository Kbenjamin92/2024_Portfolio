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
  Image, 
  Stack, 
  Text } from "@chakra-ui/react"
import { cardList } from '../data';

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
          }}>
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
                <Heading>
                  { card.projectName }
                </Heading>
                <Text>
                  { card.descriptions }
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup>
                <Button bg='red.600'>
                  { card.viewProject }
                </Button>
                <Button bg='red.600'>
                  { card.githubLink }
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        )}
      </HStack>
    </>
  )
}
