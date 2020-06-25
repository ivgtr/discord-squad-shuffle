import express from 'express'

export const app = () => {
  const serve = express()

  serve.listen(3000, () => {
    console.log('----------start----------')
  })
}

export default app
