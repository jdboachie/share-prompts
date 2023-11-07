'use client';

import { useState, useEffect } from 'react'
import PromptCard from './PromptCard';


const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className='mt-16 prompt_layout'>
      {data.map((prompt) => (
        <PromptCard
          key={prompt.id}
          prompt={prompt}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  )
}


const Feed = () => {
  const [searchText, setSearchText] = useState('')
  const [posts, setPosts] = useState([])

  const handleSearchChange = (e) => {
    setSearchText(e.target.value)
  }

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('/api/prompt')
      const data = await response.json()
      console.log(data)
      setPosts(data)
    }

    fetchPosts()
  }, [])

  return (
    <section className='feed'>
      <form
        action=""
        className='relative w-full flex-center'
      >
        <input
          required
          type="text"
          value={searchText}
          onChange={handleSearchChange}
          className='search_input peer'
          placeholder='Search (tags, prompts or usernames)'
          />
      </form>
      <PromptCardList
        data={posts}
        handleTagClick={() => {}}
      />
    </section>
  )
}

export default Feed