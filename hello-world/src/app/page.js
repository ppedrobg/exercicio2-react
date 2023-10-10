import React from 'react'
import Link from 'next/link'

export default function page(){
    return(
        <div>
          <h1>Pagina inicial</h1>

            <div>
              <ul>
                <li><Link href="/produtos">PRODUTOS</Link></li>
              </ul>
            </div>
        </div>
    )
}