import { 
  Button, 
  ButtonGroup, 
  Card, 
  CardBody, 
  CardFooter, 
  Divider, 
  HStack, 
  Heading, 
  Stack, 
  Text } from "@chakra-ui/react"
import { cardList } from '../data';

export const ProjectCard = () => {

  return (
    <>
    <HStack justifyContent='space-evenly' wrap='wrap'>
      { cardList.map(card => 
          <Card maxW='sm'>
            <CardBody>
              <Stack>
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
