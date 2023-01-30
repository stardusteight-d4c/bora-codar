import { ChatMessages } from "../App"

export function endStage(
  message: string,
  setChatMessages: React.Dispatch<React.SetStateAction<ChatMessages[]>>,
  setBody: React.Dispatch<React.SetStateAction<string>>
) {
  setChatMessages((prevState) => [
    ...prevState,
    {
      bot: [
        {
          message: `Obrigado por enviar sua opnião, sua resposta já foi enviada para a equipe de desenvolvimento.`,
          date: new Date(),
        },
      ],
    },
  ])
  setBody(message)
}