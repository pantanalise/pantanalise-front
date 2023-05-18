'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useTheme } from 'next-themes'

import { History } from '@/components/History'
import { Result } from '@/components/Result'
import { InfoCard } from '@/components/InfoCard'
import { InputArea } from '@/components/InputArea'
import { ResultModel } from '@/models/resultModel'

import githubIconBlack from '../assets/icons/github-icon-black.svg'
import githubIconWhite from '../assets/icons/github-icon-white.svg'
import moonIcon from '../assets/icons/moon-icon.svg'
import sunIcon from '../assets/icons/sun-icon.svg'

export default function Home() {
  // theme (light/dark) config
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

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

  const handleSubmit = (event: React.FormEvent) => {
    setShowResult(true)
    event.preventDefault()
    // TODO: Call API endpoint
    const result = new ResultModel(currentHistoryItemId, text, 100, 50)
    addToHistory(result)
  }

  if (!mounted) return null

  return (
    <div className="flex justify-center bg-offwhite dark:bg-darkgrey">
      <div className="flex w-[60vw] flex-col space-y-8">
        {/* history modal (only shows when history button is clicked) */}
        <History
          theme={theme}
          showHistory={showHistory}
          setShowHistory={setShowHistory}
          historyList={historyList}
        />

        <div className="mt-6 flex flex-row items-center justify-between">
          <button>
            <Image src={sunIcon} alt="" className="invisible" />
          </button>
          {/* title */}
          <h1 className="text-center font-montserrat text-6xl text-black dark:text-white">
            Engage Max
          </h1>

          <button
            className="h-10 w-10 self-center"
            onClick={() => {
              console.log(theme)
              theme === 'dark' ? setTheme('light') : setTheme('dark')
            }}
          >
            <Image
              src={theme === 'dark' ? sunIcon : moonIcon}
              alt="Sun or moon icon, depending on the mode"
              className="hover:scale-105"
            />
          </button>
        </div>

        {/* input area */}
        <InputArea
          theme={theme}
          handleSubmit={handleSubmit}
          length={length}
          setShowHistory={setShowHistory}
          text={text}
          textAreaChange={textAreaChange}
        />

        {/* result card */}
        <Result
          result={historyList.at(-1)}
          showResult={showResult}
          theme={theme}
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
              src={theme === 'dark' ? githubIconWhite : githubIconBlack}
              alt="Retweet icon"
              className="hover:scale-105"
            />
          </a>
        </div>
      </div>
    </div>
  )
}
