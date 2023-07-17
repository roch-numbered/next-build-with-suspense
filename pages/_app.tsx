import { Suspense } from 'react'
import type { AppProps } from 'next/app'

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Suspense>
			<Component {...pageProps} />
		</Suspense>
	)
}
