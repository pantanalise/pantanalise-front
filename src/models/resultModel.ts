export class ResultModel {
  id: number
  words: [{ word: string; classification: string }]
  likes: number
  retweets: number

  constructor(
    id: number,
    words: [{ word: string; classification: string }],
    likes: number,
    retweets: number,
  ) {
    this.id = id
    this.words = words
    this.likes = likes
    this.retweets = retweets
  }
}
