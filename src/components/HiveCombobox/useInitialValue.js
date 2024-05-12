import { useEffect, useState } from 'react'

export default function useInitialValue(offlineData, value, valueKey) {
  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    const initialLabel =
      offlineData.find((option) => option[valueKey] === value)?.dispLabel || ''
    setInputValue(initialLabel)
  }, [offlineData, value, valueKey])

  return [inputValue, setInputValue]
}
