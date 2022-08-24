import React from 'react'

function Header({number, data}) {
  return (
    <div>
        Header
        {console.log("header rendered")}
        <br /><br />
        <code>{JSON.stringify(data)}</code>
    </div>
  )
}

export default React.memo(Header); // burada react.memo ile birlikte header içinde değişim olmazsa render olmasını engelledik