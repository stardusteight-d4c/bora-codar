import plus from '../assets/plus.svg'
import subtraction from '../assets/subtraction.svg'
import multiplication from '../assets/multiplication.svg'
import division from '../assets/division.svg'
import plusMinus from '../assets/plus-minus.svg'
import equal from '../assets/equal.svg'

export const buttonsProps: {
  content: string
  styles: string
  props?: {}
}[] = [
  // First-Column
  {
    content: 'CE',
    styles: 'blackButton',
    props: {
      'data-metadata': 'CANCEL_ENTRY',
      style: 'color: #975DFA;',
      value: 'CANCEL_ENTRY',
    },
  },

  {
    content: 'C',
    styles: 'blackButton',
    props: {
      'data-metadata': 'CLEAR',
      value: 'CLEAR',
    },
  },
  {
    content: `%`,
    styles: 'blackButton',
    props: {
      'data-metadata': '%',
      value: 'PERCENTAGE',
    },
  },
  {
    content: `<img data-metadata="÷" value="DIVISION" src=${division} >`,
    styles: 'purpleButton',
    props: {
      'data-metadata': '÷',
      value: 'DIVISION',
    },
  },
  // Second-Column
  {
    content: '7',
    styles: 'blackButton',
    props: {
      'data-metadata': '7',
      value: '7',
    },
  },

  {
    content: '8',
    styles: 'blackButton',
    props: {
      'data-metadata': '8',
      value: '8',
    },
  },
  {
    content: `9`,
    styles: 'blackButton',
    props: {
      'data-metadata': '9',
      value: '9',
    },
  },
  {
    content: `<img data-metadata="x" value="MULTIPLICATION" src=${multiplication} >`,
    styles: 'purpleButton',
    props: {
      'data-metadata': 'x',
      value: 'MULTIPLICATION',
    },
  },
  // Third-Column
  {
    content: '4',
    styles: 'blackButton',
    props: {
      'data-metadata': '4',
      value: '4',
    },
  },

  {
    content: '5',
    styles: 'blackButton',
    props: {
      'data-metadata': '5',
      value: '5',
    },
  },
  {
    content: `6`,
    styles: 'blackButton',
    props: {
      'data-metadata': '6',
      value: '6',
    },
  },
  {
    content: `<img data-metadata="-" value="SUBTRACTION" src=${subtraction} >`,
    styles: 'purpleButton',
    props: {
      'data-metadata': '-',
      value: 'SUBTRACTION',
    },
  },
  // Fourth-Column
  {
    content: '1',
    styles: 'blackButton',
    props: {
      'data-metadata': '1',
      value: '1',
    },
  },

  {
    content: '2',
    styles: 'blackButton',
    props: {
      'data-metadata': '2',
      value: '2',
    },
  },
  {
    content: `3`,
    styles: 'blackButton',
    props: {
      'data-metadata': '3',
      value: '3',
    },
  },
  {
    content: `<img data-metadata="+" value="ADDITION" src=${plus} >`,
    styles: 'purpleButton',
    props: {
      'data-metadata': '+',
      value: 'ADDITION',
    },
  },
  // Fifth-Column
  {
    content: `<img data-metadata="±" value="PLUS_MINUS" src=${plusMinus} >`,
    styles: 'blackButton',
    props: {
      'data-metadata': '±',
      value: 'PLUS_MINUS',
    },
  },

  {
    content: '0',
    styles: 'blackButton',
    props: {
      'data-metadata': '0',
      value: '0',
    },
  },
  {
    content: `,`,
    styles: 'blackButton',
    props: {
      'data-metadata': '.',
      value: 'COMMA',
    },
  },
  {
    content: `<img data-metadata="=" value="EQUAL" src=${equal} >`,
    styles: 'equalsButton',
    props: {
      'data-metadata': '=',
      value: 'EQUAL',
    },
  },
]
