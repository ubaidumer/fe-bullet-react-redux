import { Grid } from "@material-ui/core";
import BulletComponent from "./Components/bullet-point-component/BulletComponent";
import BulletEditor from "./Components/bullet-point-editor/BulletEditor";
import Header from "./Components/Header/Header";

function App() {
  return (
    <>
    <Grid>
    <Header/>
    <Grid container>
    <Grid item md={4} >
    <BulletComponent />
    </Grid>
    <Grid item md={8}>
    <BulletEditor/>
    </Grid>
    </Grid>
    </Grid>
    </>
  );
}

export default App;

