import { Header } from "../../styles";

function Outdoor({ pic }){
    console.log(pic)
    return(
        <Header background={pic}>
            <div className="vertical-gradient">
                <div className="horizontal-gradient">
                    <h1>WORKING</h1>
                </div>

            </div>

        </Header>
    )
}

export default Outdoor;