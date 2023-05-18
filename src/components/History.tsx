import { Dispatch, SetStateAction } from 'react'
import Image from 'next/image'

import closeIcon from '../assets/icons/close-icon.svg'
import { HistoryItem } from './HistoryItem'

interface HistoryProps {
  showHistory: Boolean
  setShowHistory: Dispatch<SetStateAction<boolean>>
  historyList: {
    id: number
    text: string
    likes: number
    retweets: number
  }[]
}

export function History(props: HistoryProps) {
  return (
    <>
      {/* modal background */}
      {props.showHistory && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-25">
          {/* modal card */}
          <div className="h-4/5 w-4/5 rounded-xl bg-offwhite p-6 font-ptmono dark:bg-darkgrey">
            {/* modal header section (title and X) */}
            <div className="flex justify-between">
              <Image
                src={closeIcon}
                alt="Close icon"
                className="invisible h-5 w-5 "
              />
              <h2 className="text-4xl">Histórico</h2>
              <Image
                src={closeIcon}
                alt="Close icon"
                className="h-5 w-5 hover:cursor-pointer"
                onClick={() => props.setShowHistory(false)}
              />
            </div>
            {/* modal body section (history list) */}
            {props.historyList.length === 0 ? null : (
              <ul className="flex w-full flex-col justify-center gap-y-2 p-6">
                {props.historyList.map((historyItem) => (
                  <HistoryItem key={historyItem.id} historyItem={historyItem} />
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </>
  )
}
