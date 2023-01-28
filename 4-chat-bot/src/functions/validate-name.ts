import { ChatMessages } from '../App'

export function validateName(
  message: string,
  setChatMessages: React.Dispatch<React.SetStateAction<ChatMessages[]>>,
  setStage: React.Dispatch<React.SetStateAction<string>>
) {
  const isNameValid = message.match(
    /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u
  )
  if (!isNameValid) {
    setChatMessages((prevState) => [
      ...prevState,
      {
        bot: [
          {
            message: 'Ops! Parece que você inseriu algum caractere inválido.',
            date: new Date(),
          },
        ],
      },
    ])
  } else {
    setChatMessages((prevState) => [
      ...prevState,
      {
        bot: [
          {
            message: `Seu nome ficará registrado na base de dados como: ${message}`,
            date: new Date(),
          },
          {
            message: `Deseja prosseguir?`,
            date: new Date(),
          },
        ],
      },
    ])
    setStage('STAGE02-CONFIRM_NAME')
  }
}
