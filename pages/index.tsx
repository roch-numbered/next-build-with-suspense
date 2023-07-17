export default function Home({title}) {
  return <h1>{title.map(x => x)}</h1>
}

export const getStaticProps = async () => {
	return {
		props: {
			title: 'Hello World!'
		}
	}
}
