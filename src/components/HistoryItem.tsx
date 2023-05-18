import Image from 'next/image'
import likeIconBlack from '../assets/icons/like-icon-black.svg'
import likeIconWhite from '../assets/icons/like-icon-white.svg'
import retweetIconBlack from '../assets/icons/retweet-icon-black.svg'
import retweetIconWhite from '../assets/icons/retweet-icon-white.svg'

interface HistoryItemProps {
  historyItem: {
    id: number
    text: string
    likes: number
    retweets: number
  }
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
        {props.historyItem.text}
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
