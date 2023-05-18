export class ResultModel {
  id: number
  text: string
  likes: number
  retweets: number

  constructor(id: number, text: string, likes: number, retweets: number) {
    this.id = id
    this.text = text
    this.likes = likes
    this.retweets = retweets
  }
}
