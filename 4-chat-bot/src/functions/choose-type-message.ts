import { ChatMessages } from '../App'

export function chooseTypeMessage(
  option: string,
  setChatMessages: React.Dispatch<React.SetStateAction<ChatMessages[]>>,
  setOption: React.Dispatch<React.SetStateAction<string>>,
  setStage: React.Dispatch<React.SetStateAction<string>>
) {
  const options = ['SUGESTÃO', 'BUG', 'DÚVIDA']
  const isOptionValid = Number(option) <= 3 && Number(option) >= 0
  if (!isOptionValid) {
    setChatMessages((prevState) => [
      ...prevState,
      {
        bot: [
          {
            message: `Digite o número de uma opção válida!`,
            date: new Date(),
          },
        ],
      },
    ])
  } else {
    const chosenOption = options[Number(option) - 1]
    setOption(chosenOption)
    setChatMessages((prevState) => [
      ...prevState,
      {
        bot: [
          {
            message: `Opção [${chosenOption}] escolhida - Agora digite a mensagem que será encaminhada para os desenvolvedores.`,
            date: new Date(),
          },
        ],
      },
    ])
    setStage('END')
  }
}
