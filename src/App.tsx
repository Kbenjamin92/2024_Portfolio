import { Box, Grid, GridItem, Show } from '@chakra-ui/react'
import './App.css'
import { Navbar } from './components/Navbar'
import { ProjectCard } from './components/ProjectCard'
import { Header } from './components/Header'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Contact } from './components/Contact'

function App() {
  
  return (
    <>
    <Grid 
      templateAreas={{
        base: ` "nav"
                "header"
                "aside"
                "main"
                "footer"`,
        md: ` "nav    nav    nav  "
              "header header header "
              "aside aside  aside"
              "main   main   main"`,
        lg: ` "nav    nav    nav    nav"
              "header header header header"
              "aside   main   main   main"`
            }}
      templateColumns={{
        base: `1fr`,
        lg: `400px 1fr 1fr 1fr`
      }}
      bg='blackAlpha.400'
     >
      <GridItem padding={3} bg='gray.800' area={'nav'}>
        <Navbar />
      </GridItem>
      <GridItem area={'header'}>
        <Header />
      </GridItem>
      <GridItem bg='gray.700' area={'aside'}>
        <About />
        <Skills />
        <Show above='md'>
          <Contact />
        </Show>
      </GridItem>
      <GridItem padding={2} bg='blackAlpha.800' area={'main'}>
        <ProjectCard />
      </GridItem>
      <Show below='md'>
        <GridItem padding={3} bg='gray.700' area={'footer'}>
          <Box>
            <Contact />
          </Box>
        </GridItem>
      </Show>
    </Grid>
    </>
  )
}

export default App
