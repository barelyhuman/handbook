import Page from '@/components/page'
import Section from '@/components/section'
import { getNotes } from '@/lib/get-notes'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'

const NOTE_COMPONENTS = {
	// @ts-ignore
	mentality: () => dynamic(() => import('../notes/mentality.mdx')),
	// @ts-ignore
	welcome: () => dynamic(() => import('../notes/welcome.mdx')),
	// @ts-ignore
	git: () => dynamic(() => import('../notes/git.mdx')),
	// @ts-ignore
	workstation: () => dynamic(() => import('../notes/workstation.mdx')),
}

const defaultKey = 'welcome'

const NoteSlug = () => {
	const router = useRouter()
	const { note } = router.query

	const asNoteKey = note as keyof typeof NOTE_COMPONENTS

	let Note: any = NOTE_COMPONENTS[defaultKey]()

	if (asNoteKey && NOTE_COMPONENTS[asNoteKey]) {
		Note = NOTE_COMPONENTS[asNoteKey]()
	}

	return (
		<Page>
			<Section>
				<Note />
			</Section>
		</Page>
	)
}

export async function getStaticPaths() {
	const notes = getNotes()
	const asPaths = notes.map((n) => ({
		params: {
			note: [n],
		},
	}))
	return {
		paths: [
			{
				params: {
					note: [],
				},
			},
			...asPaths,
		],
		fallback: false,
	}
}

export async function getStaticProps() {
	return {
		props: {},
	}
}

export default NoteSlug
