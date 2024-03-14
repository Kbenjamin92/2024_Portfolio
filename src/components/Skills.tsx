import { Box, Divider, HStack, Heading, Image, Show, Text } from "@chakra-ui/react"
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
    <Box padding={5} marginTop={4}>
        <Heading color='#fff'>
            My Skills
        </Heading>
        <Box 
            w='14rem' 
            h={2} 
            bg='red.600' 
            marginY={2}
            marginBottom={5}></Box>
        <HStack flexWrap='wrap'>
            <Box>
                <Image src={htmlLogo} boxSize={{
                    base: '',
                    lg: '70px'
                }} />
                <Text textAlign='center' color='#fff'>HTML5</Text>
            </Box>
            <Box>
                <Image src={cssLogo}boxSize={{
                    base: '',
                    lg: '70px'
                }} />
                <Text textAlign='center' color='#fff'>CSS3</Text>
            </Box>
            <Box>
                <Image src={jsLogo} boxSize={{
                    base: '',
                    lg: '70px'
                }} />
                <Text textAlign='center' color='#fff'>JavaScript</Text>
            </Box>
            <Box>
                <Image src={tsLogo} boxSize={{
                    base: '',
                    lg: '70px'
                }} />
                <Text textAlign='center' color='#fff'>TypeScript</Text>
            </Box>
            <Box>
                <Image src={reactLogo} boxSize={{
                    base: '',
                    lg: '70px'
                }} />
                <Text textAlign='center' color='#fff'>React</Text>
            </Box>
            <Box>
                <Image src={nextJSLogo} boxSize={{
                    base: '',
                    lg: '70px'
                }}/>
                <Text textAlign='center' color='#fff'>NextJS</Text>
            </Box>
            <Box>
                <Image src={angularLogo} boxSize={{
                    base: '50px',
                    lg: '70px'
                }} />
                <Text textAlign='center' color='#fff'>Angular</Text>
            </Box>
            <Box>
                <Image 
                    src={nodeLogo} 
                    bg='#fff' 
                    borderRadius={5} 
                    padding='3px' 
                    boxSize={{
                        base: '50px',
                        lg: '60px'
                    }} />
                <Text textAlign='center' paddingTop={2} color='#fff'>Node.js</Text>
            </Box>
            <Box>
                <Image src={reduxLogo} boxSize={{
                    base: '',
                    lg: '70px'
                }} />
                <Text textAlign='center'>Redux</Text>
            </Box>
            <Box>
                <Image src={npmLogo} boxSize={{
                    base: '',
                    lg: '70px'
                }} />
                <Text textAlign='center' color='#fff'>npm</Text>
            </Box>
            <Box>
                <Image src={gitLogo} boxSize={{
                    base: '',
                    lg: '70px'
                }} />
                <Text textAlign='center' color='#fff'>Git</Text>
            </Box>
            <Box>
                <Image src={githubLogo} boxSize={{
                    base: '',
                    lg: '70px'
                }} />
                <Text textAlign='center' color='#fff'>GitHub</Text>
            </Box>
            <Box>
                <Image src={bootstrapLogo} boxSize={{
                    base: '',
                    lg: '70px'
                }} />
                <Text textAlign='center' color='#fff'>BootStrap</Text>
            </Box>
            <Box>
                <Image src={materialUILogo} boxSize={{
                    base: '',
                    lg: '70px'
                }} />
                <Text textAlign='center' color='#fff'>Material UI</Text>
            </Box>
        </HStack>
        <Show above='md'>
            <Divider marginTop={10}/>
        </Show>
    </Box>
    </>
  )
}

