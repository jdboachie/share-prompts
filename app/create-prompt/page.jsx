'use client';

import { useState } from 'react'
// import { useSession } from 'next-auth/client'
import { useRouter } from 'next/router'

import Form from '@components/Form'
import React from 'react';

const CreatePrompt = () => {
    const [submitting, setSubmitting] = useState(false)
    const [post, setPost] = useState({
        prompt: '',
        tag: '',
    })


    return (
        <Form

        />
    )
}

export default CreatePrompt