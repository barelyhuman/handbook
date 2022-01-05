import Link from 'next/link'

const Appbar = () => {
	return (
		<div className='pt-safe w-full bg-zinc-900 fixed top-0 left-0'>
			<header className='px-safe bg-zinc-100 border-b dark:bg-zinc-900 dark:border-zinc-800'>
				<div className='mx-auto px-6 max-w-screen-md h-20 flex items-center justify-between'>
					<Link href='/'>
						<a className='no-underline'>
							<h1 className='font-medium'>Developer Handbook</h1>
						</a>
					</Link>

					<nav className='space-x-6 flex items-center'>
						<div className='hidden sm:block'></div>
					</nav>
				</div>
			</header>
		</div>
	)
}

export default Appbar
