import Image from 'next/image'
import likeIconBlack from '../assets/icons/like-icon-black.svg'
import likeIconWhite from '../assets/icons/like-icon-white.svg'
import retweetIconBlack from '../assets/icons/retweet-icon-black.svg'
import retweetIconWhite from '../assets/icons/retweet-icon-white.svg'
import { ResultModel } from '@/models/resultModel'

interface ResultProps {
  result: ResultModel | undefined
  showResult: boolean
  theme: string | undefined
}

export function Result(props: ResultProps) {
  return (
    <>
      {props.showResult && (
        <div className="flex w-full flex-col gap-y-3 whitespace-pre-wrap rounded-lg bg-white p-6 text-justify font-ptmono text-black dark:bg-grey dark:text-white">
          {/* result title */}
          <h2 className="text-3xl text-black dark:text-white">Resultado</h2>
          {/* tweet text */}
          <p className="text-body whitespace-pre-line leading-relaxed text-black dark:text-white">{`"${props.result?.text}"`}</p>
          {/* results info row */}
          <div className="flex w-full justify-evenly self-center">
            {/* likes section */}
            <div className="mt-4 flex flex-row items-center gap-x-2">
              <Image
                src={props.theme === 'dark' ? likeIconWhite : likeIconBlack}
                alt="Heart icon"
              />
              <p className="text-3xl text-black dark:text-white">
                {props.result?.likes}
              </p>
            </div>
            {/* retweets section */}
            <div className="flex flex-row items-center gap-x-2">
              <Image
                src={
                  props.theme === 'dark' ? retweetIconWhite : retweetIconBlack
                }
                alt="Retweet icon"
              />
              <p className="text-3xl text-black dark:text-white">
                {props.result?.retweets}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
