import { Play } from "phosphor-react";
import { CountdownContainer, FormContainer, HomeContainer, Separator } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <FormContainer action="">
        <div>
          <label htmlFor="task">Vou trabalhar em</label>
          <input type="text" id="task" />

          <label htmlFor="minutessAmount">Durante</label>
          <input type="number" id="minutessAmount" />

          <span>minutos.</span>
        </div>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <button type="submit">
          <Play size={24} />
          Começar
        </button>
      </FormContainer>

    </HomeContainer>
  )
}