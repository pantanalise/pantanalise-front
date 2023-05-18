'use client'

import React, { useState } from 'react'
import Image from 'next/image'

import clockIcon from '../assets/icons/clock-icon.svg'
import arrowIcon from '../assets/icons/arrow-icon.svg'
import likeIcon from '../assets/icons/like-icon.svg'
import retweetIcon from '../assets/icons/retweet-icon.svg'
import githubIcon from '../assets/icons/github-icon.svg'
import { History } from '@/components/History'

export default function Home() {
  // input text
  const [text, setText] = useState('')
  // input text length
  const [length, setLength] = useState(0)
  // show result boolean
  const [showResult, setShowResult] = useState(false)
  // show history boolean
  const [showHistory, setShowHistory] = useState(false)
  // history list
  const [historyList, setHistoryList] = useState<
    { id: number; text: string; likes: number; retweets: number }[]
  >([])
  // history current item id
  const [currentHistoryItemId, setCurrentHistoryItemId] = useState(0)

  const textAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value)
    setLength(event.target.value.length)
  }

  const addToHistory = ({
    id,
    text,
    likes,
    retweets,
  }: {
    id: number
    text: string
    likes: number
    retweets: number
  }) => {
    setHistoryList([...historyList, { id, text, likes, retweets }])
    setCurrentHistoryItemId(id + 1)
  }

  // TODO: Call API endpoint
  const handleSubmit = (event: React.FormEvent) => {
    setShowResult(true)
    event.preventDefault()
    addToHistory({
      id: currentHistoryItemId,
      text,
      likes: 100,
      retweets: 50,
    })
  }

  return (
    <div className="flex w-[60vw] flex-col space-y-8">
      {/* history modal (only shows when history button is clicked) */}
      <History
        showHistory={showHistory}
        setShowHistory={setShowHistory}
        historyList={historyList}
      />

      {/* title */}
      <h1 className="mt-6 text-center font-montserrat text-6xl">Engage Max</h1>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        {/* input area */}
        <textarea
          defaultValue={text}
          onChange={textAreaChange}
          maxLength={280}
          className="text-body focus:border-1.5 block h-[25vh] w-full resize-none rounded-lg border border-grey bg-transparent p-2 font-ptmono text-sm text-grey focus:border-black focus:text-black focus:outline-black"
          placeholder="Digite um tweet"
        />
        {/* row: history - char counter - submit */}
        <div className="flex flex-row justify-between">
          {/* history button */}
          <button
            type="button"
            onClick={() => setShowHistory(true)}
            className="flex items-center gap-x-2 hover:scale-105"
          >
            <p className="font-ptmono text-sm">Histórico</p>
            <Image src={clockIcon} alt="Clock icon" />
          </button>
          {/* char counter */}
          <p className="font-ptmono text-sm">{length ?? 0}/280</p>
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

      {/* result card */}
      {showResult && (
        <div className="flex w-full flex-col gap-y-3 whitespace-pre-wrap rounded-lg bg-white p-6 text-justify font-ptmono">
          {
            // TODO: change text to use result text
            // TODO: change likeNumber to use result likeNumber
            // TODO: change retweetNumber to use result retweetNumber
          }
          {/* result title */}
          <h2 className="text-3xl">Resultado</h2>
          {/* tweet text */}
          <p className="text-body whitespace-pre-line">{`"${text}"`}</p>
          {/* results info row */}
          <div className="flex w-full justify-evenly self-center">
            {/* likes section */}
            <div className="mt-4 flex flex-row items-center gap-x-2">
              <Image src={likeIcon} alt="Heart icon" />
              <p className="text-3xl">350</p>
            </div>
            {/* retweets section */}
            <div className="flex flex-row items-center gap-x-2">
              <Image src={retweetIcon} alt="Retweet icon" />
              <p className="text-3xl">350</p>
            </div>
          </div>
        </div>
      )}

      {/* info card */}
      <div className="flex w-full flex-col rounded-lg bg-white p-6 text-justify font-ptmono">
        {/* info title */}
        <h2 className="mb-3 text-3xl">Descrição</h2>
        {/* info text */}
        <p className="text-body whitespace-pre-line">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida
          sed erat sed pharetra. Sed quis nisi lacus. Ut consectetur nibh sit
          amet leo finibus bibendum. Donec iaculis augue eros, ac dignissim
          mauris consequat non. Nullam nisi augue, convallis eu eleifend et,
          dignissim id enim. Phasellus pellentesque imperdiet semper.
          Suspendisse a erat ante. In non dignissim nisl. Curabitur risus ipsum,
          volutpat eget euismod et, lacinia vel nisl. In ultrices, felis ut
          laoreet dapibus, leo nunc mollis arcu, at sollicitudin dui tortor quis
          tellus. <br />
          In a accumsan nibh, id hendrerit augue. Etiam vehicula id dui vitae
          gravida. Morbi rutrum nisl diam, vel ultricies erat pellentesque
          vitae. Donec purus eros, feugiat in velit sit amet, viverra dictum
          mauris. Donec sed velit id velit porta iaculis. Etiam et pulvinar
          tortor, id porttitor dui. Nam tempus molestie leo, et molestie urna
          dapibus quis. Integer eget purus elit. Maecenas elementum vestibulum
          vehicula. Maecenas non accumsan risus, sed convallis metus. Curabitur
          commodo orci in aliquet ornare. Sed ut turpis ac enim ullamcorper
          hendrerit. Aliquam a sollicitudin mauris. Morbi vestibulum elit non
          lobortis ornare. Vivamus sapien urna, tincidunt vel diam at, rhoncus
          semper erat. Duis fermentum sed ligula in vulputate. Vestibulum
          tincidunt fermentum aliquet. Donec tempor congue.
        </p>
      </div>

      {/* github icon */}
      <div className="flex justify-center pb-2">
        <a
          href="https://github.com/pantanalise"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src={githubIcon}
            alt="Retweet icon"
            className="hover:scale-105"
          />
        </a>
      </div>
    </div>
  )
}
