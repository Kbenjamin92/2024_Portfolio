import { 
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
    <Heading fontSize='xxx-large'>
      Projects
    </Heading>
    <HStack padding={2} flexWrap='wrap'>
      { cardList.map((card, index) => 
          <Card maxW='sm' key={index}>
            <CardBody>
              <Stack>
                <Image src={card.cardImage} w='18rem' h='18rem'/>
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
                <Button bg='blue.500'>
                  { card.viewProject }
                </Button>
                <Button bg='blue.500'>
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
