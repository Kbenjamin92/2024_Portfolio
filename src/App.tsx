import { Grid, GridItem, Show } from '@chakra-ui/react'
import './App.css'
import { Navbar } from './components/Navbar'

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
        lg: `1fr 1fr 1fr 1fr`
      }}
     >
      <GridItem padding={3} bg='black.300' area={'nav'}>
        <Navbar />
      </GridItem>
      <Show above='lg'>
        <GridItem  pl='2'bg='orange.300' area={'aside'}>
          Aside
        </GridItem>
      </Show>
      <GridItem pl='2' bg='pink' area={'main'}>
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
