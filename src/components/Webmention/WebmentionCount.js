import React, { useEffect, useState } from 'react'

const initialCounts = {
  count: 0,
  type: {
    like: 0,
    mention: 0,
    reply: 0,
    repost: 0,
  },
}

const WebmentionCount = ({ target }) => {
  const [counts, setCounts] = useState(initialCounts)

  // Get counts on `target` change.
  useEffect(() => {
    async function getCounts() {
      const url = `https://webmention.io/api/count.json?target=${target}`
      const responseCounts = await fetch(url).then(response => response.json())

      setCounts(previousCounts => {
        return {
          ...previousCounts,
          ...responseCounts,
          type: {
            ...previousCounts.type,
            ...responseCounts.type,
          },
        }
      })
    }

    getCounts()
  }, [target])

  return (
    <>
      {counts && (
        <>
          <span role="img" aria-label="emoji">
            👏
          </span>{' '}
          {counts.type.like + counts.type.repost || 0}{' '}
          <span role="img" aria-label="emoji">
            💬
          </span>{' '}
          {counts.type.mention + counts.type.reply || 0}
        </>
      )}
    </>
  )
}

export default WebmentionCount
