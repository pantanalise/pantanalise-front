'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useTheme } from 'next-themes'

import { History } from '@/components/History'
import { Result } from '@/components/Result'
import { InfoCard } from '@/components/InfoCard'
import { InputArea } from '@/components/InputArea'
import { ResultModel } from '@/models/resultModel'

import githubIcon from '../assets/icons/github-icon.svg'
import moonIcon from '../assets/icons/moon-icon.svg'
import sunIcon from '../assets/icons/sun-icon.svg'

export default function Home() {
  // theme (light/dark) config
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => setMounted(true), [])

  // input text
  const [text, setText] = useState('')
  // input text length
  const [length, setLength] = useState(0)
  // show result boolean
  const [showResult, setShowResult] = useState(false)
  // show history boolean
  const [showHistory, setShowHistory] = useState(false)
  // history list
  const [historyList, setHistoryList] = useState<ResultModel[]>([])
  // history current item id
  const [currentHistoryItemId, setCurrentHistoryItemId] = useState(0)

  const textAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value)
    setLength(event.target.value.length)
  }

  const addToHistory = (result: ResultModel) => {
    setHistoryList([...historyList, result])
    setCurrentHistoryItemId(result.id + 1)
  }

  // TODO: Call API endpoint
  const handleSubmit = (event: React.FormEvent) => {
    setShowResult(true)
    event.preventDefault()
    const result = new ResultModel(currentHistoryItemId, text, 100, 50)
    addToHistory(result)
  }

  return (
    <div className="flex justify-center bg-offwhite dark:bg-darkgrey">
      <div className="flex w-[60vw] flex-col space-y-8">
        {/* history modal (only shows when history button is clicked) */}
        <History
          showHistory={showHistory}
          setShowHistory={setShowHistory}
          historyList={historyList}
        />

        <div className="mt-6 flex flex-row items-center justify-between">
          <button>
            <Image src={githubIcon} alt="Retweet icon" className="invisible" />
          </button>
          {/* title */}
          <h1 className="text-center font-montserrat text-6xl">Engage Max</h1>
          {mounted && (
            <button
              className="self-center"
              onClick={() =>
                theme === 'dark' ? setTheme('light') : setTheme('dark')
              }
            >
              <Image
                src={theme === 'dark' ? sunIcon : moonIcon}
                alt="Sun or moon icon, depending on the mode"
                className="hover:scale-105"
              />
            </button>
          )}
        </div>

        {/* input area */}
        <InputArea
          handleSubmit={handleSubmit}
          length={length}
          setShowHistory={setShowHistory}
          text={text}
          textAreaChange={textAreaChange}
        />

        {/* result card */}
        <Result result={historyList.at(-1)} showResult={showResult} />

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
    </div>
  )
}
