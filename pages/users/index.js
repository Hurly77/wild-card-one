import React from 'react'
import Link from 'next/link'
import { useState, useRef } from 'react'

function Index() {
  let [txt, setTxt] = useState('')
  let ref = useRef('')

  const handleChange = (e) => {
    console.log(e)
    e.preventDefault()
    setTxt(ref.current.value)
    console.log(txt, "text", ref, "ref")
  }
  return (
    <div>
      <form>
        <label htmlFor="UserName">UserName</label>
        <input name="UserName" type="text" ref={ref} value={txt} onChange={handleChange} />
      </form>
      <Link href={`https://${txt}.radistlabs.com`}>
        profile
      </Link>
    </div>
  )
}

export default Index
