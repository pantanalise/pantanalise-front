import Image from 'next/image'
import likeIconBlack from '../assets/icons/like-icon-black.svg'
import likeIconWhite from '../assets/icons/like-icon-white.svg'
import retweetIconBlack from '../assets/icons/retweet-icon-black.svg'
import retweetIconWhite from '../assets/icons/retweet-icon-white.svg'
import { ResultModel } from '@/models/resultModel'

interface HistoryItemProps {
  historyItem: ResultModel
  theme: string | undefined
}

export function HistoryItem(props: HistoryItemProps) {
  const backgroundColor = props.historyItem.id % 2 === 0 ? 'white' : 'offwhite'
  const darkBackgroundColor =
    props.historyItem.id % 2 === 0 ? 'grey' : 'darkgrey'
  return (
    <li
      className={`flex w-full flex-row items-center justify-between gap-x-3 rounded-md bg-${backgroundColor} dark:bg-${darkBackgroundColor} p-2`}
    >
      {/* text area */}
      <p className="max-w-[70%] flex-1 truncate text-base text-black dark:text-white">
        {/* Colorize and print words one by one */}
        {props.historyItem.words.map((wordResult, index) => {
          let color
          if (wordResult.classification === 'positive') {
            color = 'text-green dark:text-green'
          } else if (wordResult.classification === 'negative') {
            color = 'text-red dark:text-red'
          } else {
            color = 'text-black dark:text-white'
          }
          return (
            <p key={index} className={color}>
              {wordResult.word + ' '}
            </p>
          )
        })}
      </p>
      {/* like area */}
      <div className="flex items-center gap-x-1">
        <Image
          src={props.theme === 'dark' ? likeIconWhite : likeIconBlack}
          alt="Heart icon"
        />
        <p className="text-xl text-black dark:text-white">
          {props.historyItem.likes}
        </p>
      </div>
      {/* retweet area */}
      <div className="flex items-center gap-x-1">
        <Image
          src={props.theme === 'dark' ? retweetIconWhite : retweetIconBlack}
          alt="Retweet icon"
        />
        <p className="text-xl text-black dark:text-white">
          {props.historyItem.retweets}
        </p>
      </div>
    </li>
  )
}
