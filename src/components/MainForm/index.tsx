import { PlayCircleIcon, StopCircleIcon, Container } from "lucide-react";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";
import { Footer } from "../Footer";

export function MainForm(){
    return (
    <form className='form' action="">
            <div className="formRow">
              <DefaultInput labelText='Task' id='meuInput' type='text' placeholder='Digite aqui' />
            </div>

            <div className="formRow">
              <p>Lorem ipsum dolor sit amet.</p>
            </div>

            <div className="formRow">
              <Cycles />
            </div>

            <div className="formRow">
              <DefaultButton icon={<PlayCircleIcon />} color='green' />
              <DefaultButton icon={<StopCircleIcon />} color='red' />
            </div>

            <Container>
             <Footer /> 
            </Container>

          </form>
    )
}