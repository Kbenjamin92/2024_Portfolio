import { Grid, GridItem, Show } from '@chakra-ui/react'
import './App.css'
import { Navbar } from './components/Navbar'
import { ProjectCard } from './components/ProjectCard'

function App() {
  

  return (
    <>
    <Grid 
      templateAreas={{
        base: `"nav nav"
                "main main"
                "footer footer"`,
        lg: ` " nav    nav    nav    nav"
              "aside   main   main   main"
              "aside  footer footer footer"`
            }}
      templateColumns={{
        base: `1fr 1fr`,
        lg: `250px 1fr 1fr 1fr`
      }}
     >
      <GridItem padding={3} bg='black.300' area={'nav'}>
        <Navbar />
      </GridItem>
      <Show above='lg'>
        <GridItem bg='orange.300' area={'aside'}>
          Aside
        </GridItem>
      </Show>
      <GridItem padding={3} bg='black.300' area={'main'}>
        <ProjectCard />
        Main
      </GridItem>
      <GridItem pl='2' bg='green.300' area={'footer'}>
        Footer
      </GridItem>

    </Grid>
    </>
  )
}

export default App
