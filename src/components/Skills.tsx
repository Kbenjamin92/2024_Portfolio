import { Box, HStack, Heading, Image, Text } from "@chakra-ui/react"
import htmlLogo from '../assets/icons/html-logo.svg'
import cssLogo from '../assets/icons/css-logo.svg'
import jsLogo from '../assets/icons/js-logo.svg'
import tsLogo from '../assets/icons/typescript-logo.svg'
import reactLogo from '../assets/icons/react-logo.svg'
import angularLogo from '../assets/icons/angular-logo.svg'
import nodeLogo from '../assets/icons/node-logo.svg'
import reduxLogo from '../assets/icons/redux-logo.svg'
import gitLogo from '../assets/icons/git.svg'
import githubLogo from '../assets/icons/github.svg'
import bootstrapLogo from '../assets/icons/bootstrap-logo.svg'
import materialUILogo from '../assets/icons/material-ui-logo.svg'
import npmLogo from '../assets/icons/npm.svg'
import nextJSLogo from '../assets/icons/nextjs-logo.svg'

export const Skills = () => {
  return (
    <>
    <Box padding={5}>
        <Heading>
            My Skills
        </Heading>
        <Box 
            w='14rem' 
            h={2} 
            bg='red.600' 
            marginY={2}></Box>
        <HStack flexWrap='wrap'>
            <Box>
                <Image src={htmlLogo} boxSize='70px' />
                <Text textAlign='center'>HTML5</Text>
            </Box>
            <Box>
                <Image src={cssLogo}boxSize='70px' />
                <Text textAlign='center'>CSS3</Text>
            </Box>
            <Box>
                <Image src={jsLogo} boxSize='70px' />
                <Text textAlign='center'>JavaScript</Text>
            </Box>
            <Box>
                <Image src={tsLogo} boxSize='70px' />
                <Text textAlign='center'>TypeScript</Text>
            </Box>
            <Box>
                <Image src={reactLogo} boxSize='70px' />
                <Text textAlign='center'>React</Text>
            </Box>
            <Box>
                <Image src={nextJSLogo} boxSize='70px'/>
                <Text textAlign='center'>NextJS</Text>
            </Box>
            <Box>
                <Image src={angularLogo} boxSize='70px' />
                <Text textAlign='center'>Angular</Text>
            </Box>
            <Box>
                <Image 
                    src={nodeLogo} 
                    bg='#fff' 
                    borderRadius={5} 
                    padding='3px' 
                    boxSize='60px' />
                <Text textAlign='center' paddingTop={2}>Node.js</Text>
            </Box>
            <Box>
                <Image src={reduxLogo} boxSize='70px' />
                <Text textAlign='center'>Redux</Text>
            </Box>
            <Box>
                <Image src={npmLogo} boxSize='70px' />
                <Text textAlign='center'>npm</Text>
            </Box>
            <Box>
                <Image src={gitLogo} boxSize='70px' />
                <Text textAlign='center'>Git</Text>
            </Box>
            <Box>
                <Image src={githubLogo} boxSize='70px' />
                <Text textAlign='center'>GitHub</Text>
            </Box>
            <Box>
                <Image src={bootstrapLogo} boxSize='70px' />
                <Text textAlign='center'>BootStrap</Text>
            </Box>
            <Box>
                <Image src={materialUILogo} boxSize='70px' />
                <Text textAlign='center'>Material UI</Text>
            </Box>
        </HStack>
    </Box>
    </>
  )
}

