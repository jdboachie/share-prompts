'use client'

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

import Profile from '@components/Profile'

const UserProfile = () => {

  const handleEdit = () => {

  }

  const handleDelete = async () => {

  }

  return (
    <Profile
      name="my"
      desc="Welcome to your personalized profile page!"
      data={[]}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  )
}

export default UserProfile