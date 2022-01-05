import Head from 'next/head'
import Appbar from '@/components/appbar'

interface Props {
	title?: string
	children: React.ReactNode
}

const Page = ({ title, children }: Props) => (
	<>
		{title ? (
			<Head>
				<title>Developer Handbook | {title}</title>
			</Head>
		) : null}

		<Appbar />

		<main className='mx-auto px-safe pt-20 sm:pb-0 max-w-screen-md'>
			<div className='p-6'>{children}</div>
		</main>
	</>
)

export default Page
