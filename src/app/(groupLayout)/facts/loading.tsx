import Loader from '@/components/Loader/Loader'
import React from 'react'

export interface LoadingProps {}

const Loading: React.FC<LoadingProps> = () => {
  return <Loader />
}

export default Loading
