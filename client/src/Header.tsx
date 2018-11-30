import React, {
  FormEvent,
  useEffect,
  useState,
} from 'react'

// enum EventType { Mouse, Keyboard }
// interface Event { timestamp: number; }
// interface MouseEvent extends Event { x: number; y: number; }
// interface KeyEvent extends Event { keyCode: number; }

// function listenEvent(eventType: EventType, handler: (n: Event) => void) {
// }

// listenEvent(EventType.Mouse, (e: MouseEvent) => console.log(e.x + ',' + e.y))

function Header() {
  const [name, setName] = useState('Andrew')

  function changeNickname(e: FormEvent<HTMLInputElement>): void {
    e.preventDefault()
    setName(e.currentTarget.value)
  }

  useEffect(() => {
    document.title = `What's new, ${name}?`
  }, [name])

  useEffect(() => {
    const handler = () => {
      document.title = window.innerWidth.toString()
    }
    window.addEventListener('resize', handler)

    return () => {
      window.removeEventListener('resize', handler)
    }
  })

  return (
    <>
      <h1>Hello, {name}</h1>
      <input placeholder='Do you have a nickname?' onChange={changeNickname} />
      {/* <button onClick={}>Use this as your name</button> */}
    </>
  )
}

export default Header