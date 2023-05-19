import { FormEvent, ChangeEvent, Dispatch, SetStateAction } from 'react'
import Image from 'next/image'

import arrowIconBlack from '../assets/icons/arrow-icon-black.svg'
import arrowIconWhite from '../assets/icons/arrow-icon-white.svg'
import clockIconBlack from '../assets/icons/clock-icon-black.svg'
import clockIconWhite from '../assets/icons/clock-icon-white.svg'

interface InputAreaProps {
  handleSubmit: (event: FormEvent) => Promise<void>
  text: string
  length: number
  theme: string | undefined
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
        className="text-body focus:border-1.5 block h-[25vh] w-full resize-none rounded-lg border border-grey bg-transparent p-2 font-ptmono text-sm leading-relaxed text-grey placeholder:text-grey focus:border-black focus:text-black focus:outline-black dark:border-offwhite dark:text-offwhite dark:placeholder:text-offwhite dark:focus:border-white dark:focus:text-white dark:focus:outline-white"
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
          <p className="font-ptmono text-sm text-black dark:text-white">
            Histórico
          </p>
          <Image
            src={props.theme === 'dark' ? clockIconWhite : clockIconBlack}
            alt="Clock icon"
          />
        </button>
        {/* char counter */}
        <p className="font-ptmono text-sm text-black dark:text-white">
          {props.length ?? 0}/280
        </p>
        {/* submit button */}
        <button
          type="submit"
          className="flex items-center gap-x-2 hover:scale-105"
        >
          <p className="font-ptmono text-sm text-black dark:text-white">
            Analisar
          </p>
          <Image
            src={props.theme === 'dark' ? arrowIconWhite : arrowIconBlack}
            alt="Arrow icon"
          />
        </button>
      </div>
    </form>
  )
}
