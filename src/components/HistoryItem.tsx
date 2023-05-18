import Image from 'next/image'
import likeIcon from '../assets/icons/like-icon.svg'
import retweetIcon from '../assets/icons/retweet-icon.svg'

interface HistoryItemProps {
  historyItem: {
    id: number
    text: string
    likes: number
    retweets: number
  }
}

export function HistoryItem(props: HistoryItemProps) {
  const backgroundColor = props.historyItem.id % 2 === 0 ? 'white' : 'offwhite'
  return (
    <li
      className={`flex w-full flex-row items-center justify-between gap-x-3 rounded-md bg-${backgroundColor} p-2`}
    >
      {/* text area */}
      <p className="max-w-[70%] flex-1 truncate text-base">
        {props.historyItem.text}
      </p>
      {/* like area */}
      <div className="flex items-center gap-x-1">
        <Image src={likeIcon} alt="Heart icon" />
        <p className="text-xl">{props.historyItem.likes}</p>
      </div>
      {/* retweet area */}
      <div className="flex items-center gap-x-1">
        <Image src={retweetIcon} alt="Retweet icon" />
        <p className="text-xl">{props.historyItem.retweets}</p>
      </div>
    </li>
  )
}
