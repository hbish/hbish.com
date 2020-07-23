import React, { useEffect, useState, useReducer } from 'react'

function Likes({ likes }) {
  const likeElements = likes.map(link => (
    <li key={link.id}>
      <a href={link.data.url}>
        <img
          src={link.data.author.photo}
          className={'liked-by'}
          alt={link.data.author.name}
        />
        👏
      </a>
    </li>
  ))

  return (
    <>
      {likes && likes.length && (
        <div className={'likes'}>
          <ul>{likeElements}</ul>
        </div>
      )}
    </>
  )
}

function Replies({ replies }) {
  const replyElements = replies.map(link => (
    <li key={link.id}>
      💬 <a href={link.data.url}>{link.data.author.name}</a> replied:{' '}
      <span dangerouslySetInnerHTML={{ __html: link.data.content }} />
    </li>
  ))

  return (
    <>
      {replies && replies.length && (
        <div className={'mentions'}>
          <ul>{replyElements}</ul>
        </div>
      )}
    </>
  )
}

function WebmentionReplies({ target }) {
  const [page, setPage] = useState(0)
  const [fetchState, setFetchState] = useState('fetching')
  const mergeResult = (old, newRes) => [...old, ...newRes]
  const initialReplies = []
  const initialLikes = []
  // "The ‘useReducer’ Hook" - https://leewarrick.com/blog/a-guide-to-usestate-and-usereducer/
  // Instead of "useState", you can simply pass a merge logic as a reducer
  const [replies, setReplies] = useReducer(mergeResult, initialReplies)
  const [likes, setLikes] = useReducer(mergeResult, initialLikes)
  const perPage = 30

  const getMentions = () =>
    fetch(
      `https://webmention.io/api/mentions?page=${page}&per-page=${perPage}&target=${target}`
    )
      .then(response => response.json())
      .then(json => [...json.links])

  // Load initial comments once
  useEffect(() => {
    getMentions().then(feed => {
      const likeFeed = feed.filter(
        item => ['like', 'repost'].indexOf(item.activity.type) >= 0
      )
      const replyFeed = feed.filter(
        item => ['like', 'repost'].indexOf(item.activity.type) < 0
      )
      setLikes(likeFeed)
      setReplies(replyFeed)
      setFetchState('done')
    })
  }, [])

  return (
    <div>
      {fetchState === 'fetching' && <span>Fetching Replies...</span>}
      {(likes.length > 0 || replies.length > 0) && <h5>Recent Mentions</h5>}
      {likes.length > 0 && <Likes likes={likes} />}
      {replies.length > 0 && <Replies replies={replies} />}
    </div>
  )
}

export default WebmentionReplies
