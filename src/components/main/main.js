import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Main =()=>{

    return (
        <div>
            <Link to={"/nds"}>
            <Button>Nds</Button>
            </Link>
            <Link to={'/measure-type'}>
            <Button>MeasureType</Button>
            </Link>
        </div>
    );
}

export default Main;