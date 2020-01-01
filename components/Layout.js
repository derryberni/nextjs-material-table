import Head from './Head'

export default function Layout(props) {
  return (
    <div>
      <Head />
        {props.children}
    </div>
  )
}
