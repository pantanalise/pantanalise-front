import Image from 'next/image'
import likeIcon from '../assets/icons/like-icon.svg'
import retweetIcon from '../assets/icons/retweet-icon.svg'

interface ResultProps {
  result: {
    text: string
    likes: number
    retweets: number
  }
  showResult: boolean
}

export function Result(props: ResultProps) {
  return (
    <>
      {props.showResult && (
        <div className="flex w-full flex-col gap-y-3 whitespace-pre-wrap rounded-lg bg-white p-6 text-justify font-ptmono">
          {/* result title */}
          <h2 className="text-3xl">Resultado</h2>
          {/* tweet text */}
          <p className="text-body whitespace-pre-line">{`"${props.result.text}"`}</p>
          {/* results info row */}
          <div className="flex w-full justify-evenly self-center">
            {/* likes section */}
            <div className="mt-4 flex flex-row items-center gap-x-2">
              <Image src={likeIcon} alt="Heart icon" />
              <p className="text-3xl">{props.result.likes}</p>
            </div>
            {/* retweets section */}
            <div className="flex flex-row items-center gap-x-2">
              <Image src={retweetIcon} alt="Retweet icon" />
              <p className="text-3xl">{props.result.retweets}</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
