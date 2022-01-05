import { readdirSync } from 'fs'
import { join, resolve } from 'path'

const MDX_REGEX = /(\.mdx?)$/

export function getNotes() {
	const pathsToRead: string[] = []
	const files = readdirSync(join('notes'))
	files.forEach((file: any) => {
		if (MDX_REGEX.test(file)) {
			pathsToRead.push(file.replace(MDX_REGEX, ''))
		}
	})
	return pathsToRead
}
