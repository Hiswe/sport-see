import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router'

import { API } from './../Api.js'

export default function useData({ methodName,  initialData = {} }) {
    const navigate = useNavigate()
    const params = useParams()
    const [data, setData] = useState(initialData)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if (!methodName || !params.id) {
            return console.log(`missing parameter`, { methodName })
        }

        const fetchData = async () => {
            setIsLoading(true)

            try {
                const response = await API[methodName](params.id)
                setData(response)
            } catch (error) {
                navigate(`*`)
            }
            setIsLoading(false)
        }

        fetchData()
    }, [methodName, navigate, params])

    return { data, isLoading }
}
