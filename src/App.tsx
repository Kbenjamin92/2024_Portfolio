import { Grid, GridItem } from '@chakra-ui/react'
import './App.css'
import { Navbar } from './components/Navbar'
import { ProjectCard } from './components/ProjectCard'
import { Header } from './components/Header'
import { About } from './components/About'

function App() {
  
  return (
    <>
    <Grid 
      templateAreas={{
        base: `"nav nav"
                "header header"
                "aside aside"
                "main main"`,
        md: ` "nav    nav    nav  "
              "header header header "
              "aside aside  aside"
              "main   main   main"`,
        lg: ` "nav    nav    nav    nav"
              "header header header header"
              "aside   main   main   main"`
            }}
      templateColumns={{
        base: `1fr 1fr`,
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
      </GridItem>
      <GridItem padding={2} bg='black.300' area={'main'}>
        <ProjectCard />
      </GridItem>
    </Grid>
    </>
  )
}

export default App
