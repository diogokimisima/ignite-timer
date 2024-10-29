import { Play } from "phosphor-react";
import { CountdownContainer, FormContainer, HomeContainer, MinutesAmountInput, Separator, StartCountdownButton, TaskInput } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <FormContainer action="">
        <div>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput type="text" id="task" list="task-suggestion" placeholder="Dê um nome para o seu projeto" />

          <datalist id="task-suggestion">
            <option value="Projeto 1"></option>
            <option value="Projeto 2"></option>
            <option value="Projeto 3"></option>
          </datalist>

          <label htmlFor="minutessAmount">Durante</label>
          <MinutesAmountInput
            type="number"
            id="minutessAmount"
            placeholder="00"
            step={5}
            min={5}
            max={60}
          />

          <span>minutos.</span>
        </div>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartCountdownButton type="submit">
          <Play size={24} />
          Começar
        </StartCountdownButton>
      </FormContainer>

    </HomeContainer>
  )
}