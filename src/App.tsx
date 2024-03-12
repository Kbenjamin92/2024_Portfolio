import { Grid, GridItem } from '@chakra-ui/react'
import './App.css'
import { Navbar } from './components/Navbar'
import { ProjectCard } from './components/ProjectCard'
import { Header } from './components/Header'

function App() {
  
  return (
    <>
    <Grid 
      templateAreas={{
        base: `"nav nav"
                header header
                "main main"
                "aside aside"`,
        md: ` "nav    nav    nav  "
              "header header header "
              "main   main   main"
              "aside aside  aside"`,
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
      <GridItem padding={2} bg='black.300' area={'main'}>
        <ProjectCard />
      </GridItem>
        <GridItem bg='orange.300' area={'aside'}>
          Aside
        </GridItem>
    </Grid>
    </>
  )
}

export default App
