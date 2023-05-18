'use client'

import React, { useState } from 'react'
import Image from 'next/image'

import githubIcon from '../assets/icons/github-icon.svg'
import { History } from '@/components/History'
import { Result } from '@/components/Result'
import { InfoCard } from '@/components/InfoCard'
import { InputArea } from '@/components/InputArea'

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

      {/* input area */}
      <InputArea
        handleSubmit={handleSubmit}
        length={length}
        setShowHistory={setShowHistory}
        text={text}
        textAreaChange={textAreaChange}
      />

      {/* result card */}
      <Result
        result={{ text, likes: 100, retweets: 50 }}
        showResult={showResult}
      />

      {/* info card */}
      <InfoCard />

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
