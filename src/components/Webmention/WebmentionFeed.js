import React, { useEffect, useState, useReducer } from 'react'

function Replies({ replies }) {
  const replyElements = replies.map(link => (
    <li key={link.id}>
      <div dangerouslySetInnerHTML={{ __html: link.activity.sentence_html }} />
    </li>
  ))

  return (
    <>
      {replies && replies.length ? (
        <div className={'mentions'}>
          <ul>{replyElements}</ul>
        </div>
      ) : (
        <div>There is no reply...</div>
      )}
    </>
  )
}

function WebmentionReplies({ target }) {
  const [page, setPage] = useState(0)
  const [fetchState, setFetchState] = useState('fetching')
  const mergeReplies = (oldReplies, newReplies) => [
    ...oldReplies,
    ...newReplies,
  ]
  const initialReplies = []
  // "The ‘useReducer’ Hook" - https://leewarrick.com/blog/a-guide-to-usestate-and-usereducer/
  // Instead of "useState", you can simply pass a merge logic as a reducer
  const [replies, setReplies] = useReducer(mergeReplies, initialReplies)
  const perPage = 30

  const getMentions = () =>
    fetch(
      `https://webmention.io/api/mentions?page=${page}&per-page=${perPage}&target=${target}`
    )
      .then(response => response.json())
      .then(json => [...json.links])

  // Load initial comments once
  useEffect(() => {
    getMentions().then(newReplies => {
      setReplies(newReplies)
      setFetchState('done')
    })
  }, [])

  return (
    <>
      {fetchState === 'fetching' && <span>Fetching Replies...</span>}
      <Replies replies={replies} />
    </>
  )
}

export default WebmentionReplies
