import block01 from './assets/blocks/block01.png'
import block02 from './assets/blocks/block02.png'
import block03 from './assets/blocks/block03.png'
import block04 from './assets/blocks/block04.png'
import block05 from './assets/blocks/block05.png'
import block06 from './assets/blocks/block06.png'
import block07 from './assets/blocks/block07.png'
import block08 from './assets/blocks/block08.png'
import block09 from './assets/blocks/block09.png'

interface Blocks {
  cover: string
  title: string
  description: string
  location: string
}

export const blocks: Array<Blocks> = [
  {
    cover: block01,
    title: 'O Python do vovô não sobe mais',
    description:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
    location: 'São Paulo - SP',
  },
  {
    cover: block02,
    title: 'Todo mundo null',
    description:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
    location: 'Florianópolis - SC',
  },
  {
    cover: block03,
    title: 'Hoje dou exception',
    description:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
    location: 'Curitiba - PR',
  },
  {
    cover: block04,
    title: 'Manda Node',
    description:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
    location: 'Salvador - BA',
  },
  {
    cover: block05,
    title: 'Só no back-end',
    description:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
    location: 'São Paulo - SP',
  },
  {
    cover: block06,
    title: 'Esse anel não é de Ruby',
    description:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
    location: 'São Paulo - SP',
  },
  {
    cover: block07,
    title: 'Pimenta no C# dos outros é refresco',
    description:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
    location: 'Rio de Janeiro - RJ',
  },
  {
    cover: block08,
    title: 'EnCACHE aqui',
    description:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
    location: 'Porto Alegre - RS',
  },
  {
    cover: block09,
    title: 'Não valho nada mas JAVA li',
    description:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
    location: 'São Paulo - SP',
  },
]
