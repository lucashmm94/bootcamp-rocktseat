export function RepositoryItem(props){
  return(
    <li>

      {/* Caso esteja vazio, vai default*/}

    <strong>{props.repository?.name ?? 'Default'}</strong>
    
    <p>{props.repository?.description ?? 'Default'}</p>

    <a href={props.repository?.link ?? 'Default'}>
      Acessar Repositorio
    </a>
  </li>
  )
}