import Page from '@/components/page'
import Section from '@/components/section'
import { getNotes } from '@/lib/get-notes'
// @ts-ignore
import DeveloperMentality from '@/notes/mentality.mdx'
// @ts-ignore
import WelcomeNote from '@/notes/welcome.mdx'
// @ts-ignore
import GitNote from '@/notes/git.mdx'
// @ts-ignore
import WorkstationNote from '@/notes/workstation.mdx'

import { useRouter } from 'next/router'

const notesMap = {
	mentality: DeveloperMentality,
	welcome: WelcomeNote,
	git: GitNote,
	workstation: WorkstationNote,
}
const defaultKey = 'welcome'

const NoteSlug = () => {
	const router = useRouter()
	const { note } = router.query
	console.log({ q: router.query })

	const asNoteKey = note as keyof typeof notesMap

	let Note: any = notesMap[defaultKey]

	if (asNoteKey && notesMap[asNoteKey]) {
		Note = notesMap[asNoteKey]
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
