# discord-squad-shuffle
[![MIT License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE)
![CI](https://github.com/ivgtr/discord-squad-shuffle/workflows/CI/badge.svg)

### botの公開は終了しています
このbotを利用したい方はこのリポジトリをcloneしてherokuにdeployしてみてください。  

### これは何?
##### Discordのボイスチャンネルに参加している人をランダムにチーム分けするbot

### 使い方
以下のurlからbotを導入したいサーバーに追加する

~~__[ここ]()__~~(公開は終了)

##### ボイスチャットに参加しているメンバーから○チーム作る時
例)３つのチームを作る場合
`!t 3`
or
`!t @mentions 3`

##### ボイスチャットに参加しているメンバーから○人のチームを作る時
例)３人のチームを作る場合
`!m 3`
or
`!m @mentions 3`

#### 仕様
- 人数を超過した場合、端数は余りとする
- 記述の順番は[command] [@mentions *無くても良い] [number]
- 反応がない場合は記述の方式を何か間違っていると思われる

### License
MIT © [ivgtr](https://github.com/ivgtr)