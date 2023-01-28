import { ChatMessages } from '../App'

export function confirmName(
  message: string,
  name: string,
  setChatMessages: React.Dispatch<React.SetStateAction<ChatMessages[]>>,
  setStage: React.Dispatch<React.SetStateAction<string>>
) {
  if (
    message.toLocaleLowerCase() === 'sim' ||
    message.toLocaleLowerCase() === 's'
  ) {
    setChatMessages((prevState) => [
      ...prevState,
      {
        bot: [
          {
            message: `<p>${name}, agora descreva o tipo de mensagem que você deseja enviar para equipe de desenvolvimento:</p> <br />
            <p>[1] - SUGESTÃO 💬</p> 
            <p>[2] - BUG 🐛</p> 
            <p>[3] - DÚVIDA 🤔</p>            
            `,
            date: new Date(),
          },
        ],
      },
    ])
    setStage('STAGE03-TYPE_MESSAGE')
  } else if (message.toLowerCase() === 'n' || message.toLowerCase() === 'não') {
    setChatMessages((prevState) => [
      ...prevState,
      {
        bot: [
          {
            message: 'Sendo assim, por favor insira o seu nome novamente!',
            date: new Date(),
          },
        ],
      },
    ])
    setStage('STAGE01-NAME')
  }
}
