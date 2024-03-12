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
    <HStack padding={2} flexWrap='wrap'>
      { cardList.map((card, index) => 
          <Card maxW='sm' key={index}>
            <CardBody>
              <Stack>
                <Image src={card.cardImage} />
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
                <Button>
                  { card.viewProject }
                </Button>
                <Button>
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
