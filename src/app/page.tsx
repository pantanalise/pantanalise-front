'use client'

import React, { useState } from 'react'
import Image from 'next/image'

import clockIcon from '../assets/icons/clock-icon.svg'
import arrowIcon from '../assets/icons/arrow-icon.svg'
import likeIcon from '../assets/icons/like-icon.svg'
import retweetIcon from '../assets/icons/retweet-icon.svg'
import githubIcon from '../assets/icons/github-icon.svg'

export default function Home() {
  const [text, setText] = useState('')
  const [length, setLength] = useState(0)

  const textAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value)
    setLength(event.target.value.length)
  }

  // TODO: Call API endpoint
  const handleSubmit = (event: React.FormEvent) => {
    alert(text)
    event.preventDefault()
    // TODO: add to history
  }

  return (
    <div className="flex w-[60vw] flex-col space-y-8">
      {/* title */}
      <h1 className="mt-6 text-center font-montserrat text-4xl">Engage Max</h1>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        {/* input area */}
        <textarea
          onChange={textAreaChange}
          maxLength={280}
          className="text-body focus:border-1.5 block h-[25vh] w-full resize-none self-center rounded-lg border border-greyish bg-transparent p-2.5 font-ptmono text-sm text-greyish focus:border-black focus:text-black focus:outline-none focus:ring-black"
          placeholder="Digite um Tweet"
        >
          {text}
        </textarea>
        {/* row: history - char counter - submit */}
        <div className="flex flex-row justify-between">
          {/* history button */}
          <button className="flex items-center gap-x-2">
            <p>Histórico</p>
            <Image src={clockIcon} alt="Clock icon" />
          </button>
          {/* char counter */}
          <p>{length ?? 0}/280</p>
          {/* submit button */}
          <button className="flex items-center gap-x-2">
            <p>Analisar</p>
            <Image src={arrowIcon} alt="Arrow icon" />
          </button>
        </div>
      </form>

      {/* result card */}
      <div className="flex w-full flex-col rounded-lg bg-white p-4 text-justify">
        {/* result title */}
        <h2 className="mb-2 font-ptmono text-3xl">Resultado</h2>
        {/* tweet text */}
        <p className="text-body whitespace-pre-line font-ptmono">{`"${text}"`}</p>
        {/* results info row */}
        <div className="flex w-full justify-evenly self-center">
          {/* likes section */}
          <div className="flex flex-row items-center gap-x-2">
            <Image src={likeIcon} alt="Heart icon" />
            <p className="font-ptmono text-3xl">350</p>
          </div>
          {/* retweets section */}
          <div className="flex flex-row items-center gap-x-2">
            <Image src={retweetIcon} alt="Retweet icon" />
            <p className="font-ptmono text-3xl">350</p>
          </div>
        </div>
      </div>

      {/* info card */}
      <div className="flex w-full flex-col rounded-lg bg-white p-4 text-justify">
        {/* info title */}
        <h2 className="mb-2 font-ptmono text-3xl">Descrição</h2>
        {/* info text */}
        <p className="text-body whitespace-pre-line font-ptmono">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida
          sed erat sed pharetra. Sed quis nisi lacus. Ut consectetur nibh sit
          amet leo finibus bibendum. Donec iaculis augue eros, ac dignissim
          mauris consequat non. Nullam nisi augue, convallis eu eleifend et,
          dignissim id enim. Phasellus pellentesque imperdiet semper.
          Suspendisse a erat ante. In non dignissim nisl. Curabitur risus ipsum,
          volutpat eget euismod et, lacinia vel nisl. In ultrices, felis ut
          laoreet dapibus, leo nunc mollis arcu, at sollicitudin dui tortor quis
          tellus. In a accumsan nibh, id hendrerit augue. Etiam vehicula id dui
          vitae gravida. Morbi rutrum nisl diam, vel ultricies erat pellentesque
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
      <a
        href="https://github.com/pantanalise"
        target="_blank"
        rel="noreferrer"
        className="flex justify-center pb-2"
      >
        <Image src={githubIcon} alt="Retweet icon" />
      </a>
    </div>
  )
}
