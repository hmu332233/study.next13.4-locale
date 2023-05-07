'use client'

function Button() {
  const handleClick = () => alert('Hello!');
  return <button className="border border-black" onClick={handleClick}>버튼</button>
}

export default Button;