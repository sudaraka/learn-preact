import { h } from 'preact'
import { route } from 'preact-router'

const
  search = query => route(`/profile/${encodeURIComponent(query)}`)

export default () => (
  <section>
    <p>Enter a Github Username</p>
    <input
      type='search'
      placeholder='eg: sudaraka'
      onSearch={ e => search(e.target.value) }
    />
  </section>
)
