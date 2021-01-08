export type GlobalContextType = {
  state: State
  dispatch: React.Dispatch<Actions>
}

export type Actions = {
  type:
    | 'COLOR'
    | 'ROUNDED'
    | 'PADDING_Y'
    | 'PADDING_X'
    | 'PADDING'
    | 'FONT_WEIGHT'
    | 'CLIPBOARD'
    | 'BORDER'
    | 'TEXT_TRANSFORM'
  payload?: string
}

export type State = {
  color:
    | 'blueGray'
    | 'coolGray'
    | 'gray'
    | 'trueGray'
    | 'warmGray'
    | 'red'
    | 'orange'
    | 'amber'
    | 'yellow'
    | 'lime'
    | 'green'
    | 'emerald'
    | 'teal'
    | 'cyan'
    | 'lightBlue'
    | 'blue'
    | 'indigo'
    | 'violet'
    | 'purple'
    | 'fuchsia'
    | 'pink'
    | 'rose'
  rounded:
    | 'rounded-none'
    | 'rounded-sm'
    | 'rounded'
    | 'rounded-md'
    | 'rounded-lg'
    | 'rounded-xl'
    | 'rounded-full'
    | 'rose'
  border: 'border-0' | 'border' | 'border-2' | 'border-4'
  fontWeight:
    | 'font-thin'
    | 'font-light'
    | 'font-normal'
    | 'font-medium'
    | 'font-semibold'
    | 'font-bold'
    | 'font-black'
  textTransform: 'uppercase' | 'lowercase' | 'capitalize' | 'normal-case'
  paddingX:
    | 'px-0'
    | 'px-1'
    | 'px-2'
    | 'px-3'
    | 'px-4'
    | 'px-5'
    | 'px-6'
    | 'px-7'
    | 'px-8'
    | 'px-9'
    | 'px-10'
  paddingY:
    | 'py-0'
    | 'py-1'
    | 'py-2'
    | 'py-3'
    | 'py-4'
    | 'py-5'
    | 'py-6'
    | 'py-7'
    | 'py-8'
  padding: 'p-0' | 'p-1' | 'p-2' | 'p-3' | 'p-4' | 'p-5' | 'p-6'
}
