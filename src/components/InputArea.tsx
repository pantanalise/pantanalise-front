import { FormEvent, ChangeEvent, Dispatch, SetStateAction } from 'react'
import Image from 'next/image'

import arrowIcon from '../assets/icons/arrow-icon.svg'
import clockIcon from '../assets/icons/clock-icon.svg'

interface InputAreaProps {
  handleSubmit: (event: FormEvent) => void
  text: string
  length: number
  textAreaChange: (event: ChangeEvent<HTMLTextAreaElement>) => void
  setShowHistory: Dispatch<SetStateAction<boolean>>
}

export function InputArea(props: InputAreaProps) {
  return (
    <form onSubmit={props.handleSubmit} className="flex flex-col space-y-4">
      <textarea
        defaultValue={props.text}
        onChange={props.textAreaChange}
        maxLength={280}
        className="text-body focus:border-1.5 block h-[25vh] w-full resize-none rounded-lg border border-grey bg-transparent p-2 font-ptmono text-sm text-grey focus:border-black focus:text-black focus:outline-black"
        placeholder="Digite um tweet"
      />
      {/* row: history - char counter - submit */}
      <div className="flex flex-row justify-between">
        {/* history button */}
        <button
          type="button"
          onClick={() => props.setShowHistory(true)}
          className="flex items-center gap-x-2 hover:scale-105"
        >
          <p className="font-ptmono text-sm">Histórico</p>
          <Image src={clockIcon} alt="Clock icon" />
        </button>
        {/* char counter */}
        <p className="font-ptmono text-sm">{props.length ?? 0}/280</p>
        {/* submit button */}
        <button
          type="submit"
          className="flex items-center gap-x-2 hover:scale-105"
        >
          <p className="font-ptmono text-sm">Analisar</p>
          <Image src={arrowIcon} alt="Arrow icon" />
        </button>
      </div>
    </form>
  )
}
