import { h } from 'preact'

export default props => (
  <div class='user'>
    <figure class='user__image'>
      <img src={ props.image } />
    </figure>
    <p class='user__name'>{ props.name }</p>
  </div>
)
