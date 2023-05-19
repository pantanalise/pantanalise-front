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

  // input text
  const [text, setText] = useState('')
  // input text length
  const [length, setLength] = useState(0)
  // show result boolean
  const [showResult, setShowResult] = useState(false)
  // populate result data
  const [result, setResult] = useState<ResultModel>()
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

  const getLikesAndRetweets = async (
    tweet: string,
  ): Promise<{ likes: number; retweets: number }> => {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ text }),
    }
    const response = await fetch(
      'http://localhost:3333/predict/engage',
      requestOptions,
    )
    const data = await response.json()
    const { likes, retweets } = data.engageRecommend
    return { likes, retweets }
  }

  const getWordByWordClassification = async (
    tweet: string,
  ): Promise<[{ word: string; classification: string }]> => {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ text }),
    }
    const response = await fetch(
      'http://localhost:3333/predict/sentiment',
      requestOptions,
    )
    const data = await response.json()
    const { sentimentWord: words } = data
    return words
  }

  const getApiInfo = async (tweet: string): Promise<ResultModel> => {
    // Get likes and retweets prediction
    const { likes, retweets } = await getLikesAndRetweets(text)
    // Get text words sentiment analysis
    const words = await getWordByWordClassification(text)
    return new ResultModel(currentHistoryItemId, words, likes, retweets)
  }

  let apiInfo: ResultModel

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    apiInfo = await getApiInfo(text)

    setResult(apiInfo)
  }

  useEffect(() => {
    if (!mounted) return setMounted(true)
    addToHistory(result!)
    setShowResult(true)
  }, [result, mounted, addToHistory])

  // useEffect(() => {
  //   setMounted(true)
  // }, [])

  if (!mounted) return

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
          handleSubmit={async (event) => await handleSubmit(event)}
          length={length}
          setShowHistory={setShowHistory}
          text={text}
          textAreaChange={textAreaChange}
        />

        {/* result card */}
        <Result result={result} showResult={showResult} theme={theme} />

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
