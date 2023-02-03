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
      'data-metadata': 'CE',
      style: 'color: #975DFA',
      value: 'CANCEL_ENTRY',
    },
  },

  {
    content: 'C',
    styles: 'blackButton',
    props: {
      'data-metadata': 'C',
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
    content: `<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 14C3.5 13.5168 3.89175 13.125 4.375 13.125H23.625C24.1082 13.125 24.5 13.5168 24.5 14C24.5 14.4832 24.1082 14.875 23.625 14.875H4.375C3.89175 14.875 3.5 14.4832 3.5 14Z" fill="#EBEBEB"/>
    <path d="M14 8.75C14.9665 8.75 15.75 7.9665 15.75 7C15.75 6.0335 14.9665 5.25 14 5.25C13.0335 5.25 12.25 6.0335 12.25 7C12.25 7.9665 13.0335 8.75 14 8.75Z" fill="#EBEBEB"/>
    <path d="M14 22.75C14.9665 22.75 15.75 21.9665 15.75 21C15.75 20.0335 14.9665 19.25 14 19.25C13.0335 19.25 12.25 20.0335 12.25 21C12.25 21.9665 13.0335 22.75 14 22.75Z" fill="#EBEBEB"/>
    </svg>`,
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
    content: `<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M22.4937 5.50628C22.8354 5.84799 22.8354 6.40201 22.4937 6.74372L6.74372 22.4937C6.40201 22.8354 5.84799 22.8354 5.50628 22.4937C5.16457 22.152 5.16457 21.598 5.50628 21.2563L21.2563 5.50628C21.598 5.16457 22.152 5.16457 22.4937 5.50628Z" fill="#EBEBEB"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.50628 5.50628C5.84799 5.16457 6.40201 5.16457 6.74372 5.50628L22.4937 21.2563C22.8354 21.598 22.8354 22.152 22.4937 22.4937C22.152 22.8354 21.598 22.8354 21.2563 22.4937L5.50628 6.74372C5.16457 6.40201 5.16457 5.84799 5.50628 5.50628Z" fill="#EBEBEB"/>
    </svg>`,
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
    content: `<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 14C3.5 13.5168 3.89175 13.125 4.375 13.125H23.625C24.1082 13.125 24.5 13.5168 24.5 14C24.5 14.4832 24.1082 14.875 23.625 14.875H4.375C3.89175 14.875 3.5 14.4832 3.5 14Z" fill="#EBEBEB"/>
    </svg>`,
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
    content: `<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 14C3.5 13.5168 3.89175 13.125 4.375 13.125H23.625C24.1082 13.125 24.5 13.5168 24.5 14C24.5 14.4832 24.1082 14.875 23.625 14.875H4.375C3.89175 14.875 3.5 14.4832 3.5 14Z" fill="#EBEBEB"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M14 3.5C14.4832 3.5 14.875 3.89175 14.875 4.375V23.625C14.875 24.1082 14.4832 24.5 14 24.5C13.5168 24.5 13.125 24.1082 13.125 23.625V4.375C13.125 3.89175 13.5168 3.5 14 3.5Z" fill="#EBEBEB"/>
    </svg>`,
    styles: 'purpleButton',
    props: {
      'data-metadata': '+',
      value: 'ADDITION',
    },
  },
  // Fifth-Column
  {
    content: `<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M22.4937 5.50628C22.8354 5.84799 22.8354 6.40201 22.4937 6.74372L6.74372 22.4937C6.40201 22.8354 5.84799 22.8354 5.50628 22.4937C5.16457 22.152 5.16457 21.598 5.50628 21.2563L21.2563 5.50628C21.598 5.16457 22.152 5.16457 22.4937 5.50628Z" fill="#EBEBEB"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.625 7.875C2.625 7.39175 3.01675 7 3.5 7H12.25C12.7332 7 13.125 7.39175 13.125 7.875C13.125 8.35825 12.7332 8.75 12.25 8.75H3.5C3.01675 8.75 2.625 8.35825 2.625 7.875Z" fill="#EBEBEB"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.875 2.625C8.35825 2.625 8.75 3.01675 8.75 3.5V12.25C8.75 12.7332 8.35825 13.125 7.875 13.125C7.39175 13.125 7 12.7332 7 12.25V3.5C7 3.01675 7.39175 2.625 7.875 2.625Z" fill="#EBEBEB"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.875 20.125C14.875 19.6418 15.2668 19.25 15.75 19.25H24.5C24.9832 19.25 25.375 19.6418 25.375 20.125C25.375 20.6082 24.9832 21 24.5 21H15.75C15.2668 21 14.875 20.6082 14.875 20.125Z" fill="#EBEBEB"/>
    </svg>`,
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
      'data-metadata': ',',
      value: 'COMMA',
    },
  },
  {
    content: `<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 17.5C3.5 17.0168 3.89175 16.625 4.375 16.625H23.625C24.1082 16.625 24.5 17.0168 24.5 17.5C24.5 17.9832 24.1082 18.375 23.625 18.375H4.375C3.89175 18.375 3.5 17.9832 3.5 17.5Z" fill="#EBEBEB"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 10.5C3.5 10.0168 3.89175 9.625 4.375 9.625H23.625C24.1082 9.625 24.5 10.0168 24.5 10.5C24.5 10.9832 24.1082 11.375 23.625 11.375H4.375C3.89175 11.375 3.5 10.9832 3.5 10.5Z" fill="#EBEBEB"/>
    </svg>`,
    styles: 'equalsButton',
    props: {
      'data-metadata': '=',
      value: 'EQUAL',
    },
  },
]
